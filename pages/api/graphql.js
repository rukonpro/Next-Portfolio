import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import gql from "graphql-tag";
import resolvers from "@/graphql/rootResolver/rootResolver";
import databaseConnection from "@/app/assite/DB/databaseConnection";


const typeDefs=gql`

    
    type Query {
        projectInfo:project ,
        me:User
    }
    
    type Mutation {
        registerUser(username: String!, email: String!, password: String!): User
        userLogin(email: String!, password: String!): AuthPayload
    }
    
    
    type project{
        title:String,
        description:String
    }
    
    type User {
        id: ID
        username: String!
        email: String!
        password: String!
    }

    type AuthPayload {
        token: String
        user: User
    }
`;


/*databaseConnection*/
databaseConnection().then(res=>{
    if(res){
        console.log("Database connection successfully")
    }
})


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [

        // Install a landing page plugin based on NODE_ENV

        process.env.NODE_ENV === 'production'

            ? ApolloServerPluginLandingPageProductionDefault({

                graphRef: 'my-graph-id@my-graph-variant',

                footer: false,

            })

            : ApolloServerPluginLandingPageLocalDefault({ footer: false }),

    ],
});


const handler = startServerAndCreateNextHandler(server,{
context:async (req)=>{
    const user = await authenticateUser(req);
    const additionalContextData = {};
    return { user, ...additionalContextData };
}
});

export default handler;