import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import resolvers from "@/graphql/rootResolver/rootResolver";
import databaseConnection from "@/app/assite/DB/databaseConnection";
import typeDefs from "@/graphql/typeDefs/typeDepf";



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

        process.env.NODE_ENV === 'production'?
            ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: true,
            }): ApolloServerPluginLandingPageLocalDefault({ footer: true }),

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