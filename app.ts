import express, { Request } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import './src/utils/dbconnect';
import { VerifyToken } from './src/utils/jwt';

import schema from './src/graphql';
import model from './src/models';

const app = express();
const apolloServer = new ApolloServer({ 
    schema,
    context: async ({ req }: { req: Request }) => {
        const Auth = req.headers.authorization ? VerifyToken(req.headers.authorization) : null;
        return { model, Auth };
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

apolloServer.applyMiddleware({ app });

export {
    app,
    apolloServer
};
