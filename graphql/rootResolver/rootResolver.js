import userMutations from "@/graphql/mutations/userMutations"
import userQuery from "@/graphql/querys/userQuery";


const resolvers = {
    Query: {...userQuery},
    Mutation:{...userMutations}
};

export default resolvers