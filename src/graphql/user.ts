import type { IUser } from '../models/user';
import type { SchemaType } from '../models';
import { ApolloError } from 'apollo-server-express';
import { decrypt } from '../utils/brcypt';
import { CreateToken } from '../utils/jwt';

const typeDefs = `
type User {
    _id: String
    email: String!
    password: String!
}

type AuthPayload {
    token: String
    email: String
}

enum Role {
    USER
    ADMIN
}

extend type Query {
    getUser(id: String!): User
}

extend type Mutation {
    createUser(email: String!, password: String!): User
    login(email: String!, password: String!): AuthPayload
}
`;

const resolvers = {
    Query: {
        getUser: async (_: any, { id }: { id: string }, { model, Auth }: { model: SchemaType, Auth: any} ): Promise<IUser| ApolloError | null> => {
            if (!Auth) {
                return new ApolloError('Please login before requesting', '404');
            }
            return model.User.findById(id); 
        }
    },
    Mutation: {
        createUser: async (_: any, { email, password}: { email: string, password: string}, { model }: { model: SchemaType }): Promise<IUser | null> => {
            return model.User.create({ email, password });
        },
        login: async (_: any, { email, password }: any, { model }: { model: SchemaType}): Promise<unknown> => {
            try {
                const userData: IUser | null = await model.User.findOne({ email });

                if (!userData) {
                    return new ApolloError('User not found', '404');
                }

                if (!decrypt(password, userData.password)) {
                    return new ApolloError('Wrong password', '401');
                } else {
                    return {
                        token: CreateToken(userData),
                        email: userData.email
                    };
                }
            } catch (error: unknown) {
                return new ApolloError('Something went wrong', '500');
            }
        }
    }
};

export default {
    typeDefs,
    resolvers
};