import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import authenticateUser from "@/pages/jsonwebtoken/jsonwebtoken";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import resolvers from "@/graphql/rootResolver/rootResolver";
import databaseConnection from "@/app/assite/DB/databaseConnection";
import typeDefs from "@/graphql/typeDefs/typeDepf";
import loglevel from 'loglevel';
import {ApolloServerErrorCode} from "@apollo/server/errors";
import { buildSubgraphSchema } from '@apollo/subgraph';

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
    formatError: (formattedError, error) => {
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
    },
    plugins: [
        process.env.NODE_ENV === 'production'?
            ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: true,
            }):
            ApolloServerPluginLandingPageLocalDefault({ footer: true }),

        {
            async serverWillStart() {
                console.log('Server starting up!');
            },
            async requestDidStart() {

                return {

                    async parsingDidStart() {

                        return async (err) => {

                            if (err) {

                                console.error(err);

                            }

                        };

                    },

                    async validationDidStart() {

                        // This end hook is unique in that it can receive an array of errors,

                        // which will contain every validation error that occurred.

                        return async (errs) => {

                            if (errs) {

                                errs.forEach((err) => console.error(err));

                            }

                        };

                    },

                    async executionDidStart() {

                        return {

                            async executionDidEnd(err) {

                                if (err) {

                                    console.error(err);

                                }

                            },

                        };

                    },

                };

            },
        },
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