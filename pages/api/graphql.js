import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
import gql from "graphql-tag";

const typeDefs =gql`
    type Query {
        hello: String
    }

`

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