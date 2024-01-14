import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import gql from "graphql-tag";

const typeDefs =gql`
    type Query {
        hello: String
    }

`

const resolvers = {

    Query: {
        hello: () => {
            return "world"
        },
    },
};


const server = new ApolloServer({
    resolvers,
    typeDefs,
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