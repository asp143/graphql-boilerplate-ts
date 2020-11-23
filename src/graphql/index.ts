import { makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';

import User from './user';

const mainTypeDefs = `
type Query {
    _empty: String
}

type Mutation {
    _empty: String
}
`;

export default makeExecutableSchema({
    typeDefs: [mainTypeDefs, User.typeDefs],
    resolvers: merge({}, User.resolvers)
});