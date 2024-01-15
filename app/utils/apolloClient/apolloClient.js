import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode:true,
        uri: "https://rukonpro.vercel.app/api/graphql",
        cache: new InMemoryCache(),
    });
};

export const client=createApolloClient()
export default createApolloClient;