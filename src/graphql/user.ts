const typeDefs = `
type User {
    _id: String
    email: String!
    password: String!
}

enum Role {
    USER
    ADMIN
}

extend type Query {
    getUser(id: String!): User
}
`;

const resolvers = {
    Query: {
        getUser: async (_: any, { id }: any, context: any): Promise<any> => {
            return {
                _id: id,
                email: 'email',
                password: 'password'
            };
        }
    }
};

export default {
    typeDefs,
    resolvers
};