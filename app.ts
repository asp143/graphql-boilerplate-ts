import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import schema from './src/graphql';

const app = express();
const apolloServer = new ApolloServer({ schema });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

apolloServer.applyMiddleware({ app });

export {
    app,
    apolloServer
};
