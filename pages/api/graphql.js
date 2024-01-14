import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { ApolloServer } from "@apollo/server";
import typeDefs from "@/pages/graphql/schema";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";



const resolvers = {

    Query: {
        hello: (_,__,config) => {
            return "world"
        },
    },
};


const server = new ApolloServer({
    resolvers,
    typeDefs,
});


const handler = startServerAndCreateNextHandler(server,{
context:async (req)=>{
    const user = await authenticateUser(req);
    const additionalContextData = {};
    return { user, ...additionalContextData };
}
});

export default handler;