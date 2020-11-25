import type { IUser } from '../models/user';
import type { SchemaType } from '../models';

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
        getUser: async (_: any, { id }: { id: string }, { model }: { model: SchemaType} ): Promise<IUser | null> => {
            return model.User.findById(id); 
        }
    }
};

export default {
    typeDefs,
    resolvers
};