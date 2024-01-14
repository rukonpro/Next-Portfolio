import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
/*import {ApolloServerPluginLandingPageProductionDefaultOptions} from '@apollo/server/plugin/landingPage/default';*/
import resolvers from "@/graphql/rootResolver/rootResolver";
import databaseConnection from "@/app/assite/DB/databaseConnection";
import typeDefs from "@/graphql/typeDefs/typeDepf";



/*databaseConnection*/
databaseConnection().then(res=>{
    if(res){
        console.log("Database connection successfully")
    }
})



/*
*
* // Install a landing page plugin based on NODE_ENV

        process.env.NODE_ENV === 'production'?
            ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: false,
            }): ApolloServerPluginLandingPageLocalDefault({ footer: false }),
*
*
* */


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});


const handler = startServerAndCreateNextHandler(server,{
context:async (req)=>{
    const user = await authenticateUser(req);
    const additionalContextData = {};
    return { user, ...additionalContextData };
}
});

export default handler;