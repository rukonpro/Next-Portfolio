import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
/*
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
*/
import {

    ApolloServerPluginLandingPageGraphQLPlayground

} from "apollo-server-core";
import resolvers from "@/graphql/rootResolver/rootResolver";
import databaseConnection from "@/app/assite/DB/databaseConnection";
import typeDefs from "@/graphql/typeDefs/typeDepf";
import loglevel from 'loglevel';
import { buildSubgraphSchema } from '@apollo/subgraph';
import formatError from "@/graphql/helpers/formatError";
import serverWillStart from "@/graphql/helpers/serverWillStart";

/*databaseConnection*/
databaseConnection().then(res=>{
    if(res){
        console.log("Database connection successfully")
    }
});


const shouldShowDebugMessages = process.env.NODE_ENV !== 'production';
const logger = loglevel.getLogger('apollo-server');
logger.setLevel(shouldShowDebugMessages ? loglevel.levels.DEBUG : loglevel.levels.INFO);


const server = new ApolloServer({
    logger,
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    introspection: true,
    formatError: formatError,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
       serverWillStart,
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