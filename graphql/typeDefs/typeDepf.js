import gql from "graphql-tag";

const typeDefs=gql`
    type Query {
        projectInfo:project ,
        me:User
    }

    type Mutation {
        registerUser(username: String!, email: String!, password: String!): User
        userLogin(email: String!, password: String!): AuthPayload
    }


    type project{
        title:String,
        description:String
    }

    type User {
        id: ID
        username: String!
        email: String!
        password: String!
        role:Role
    }
    enum Role {
        ADMIN
        REVIEWER
        USER

    }
    type AuthPayload {
        token: String
        user: User
    }
`;

export default typeDefs;