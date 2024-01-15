import {ApolloServerErrorCode} from "@apollo/server/errors";


const formatError= (formattedError, error) => {
        if (
            formattedError.extensions.code ===
            ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
        ) {
            return {
                ...formattedError,
                message: "Your query doesn't match the schema. Try double-checking it!",
            };
        }
        return formattedError;
    }

    export default formatError