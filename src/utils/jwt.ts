import jwt from 'jsonwebtoken';
import type { IUser } from '../models/user';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const CreateToken = (userData: IUser): string => {
    const signOptions = {
        // eslint-disable-next-line no-underscore-dangle
        _id: userData._id,
        email: userData.email,
    };

    const token = jwt
        .sign(signOptions, JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
    return token;
};

export const VerifyToken = (token: string): any => {
    const isVerified = jwt.verify(token, JWT_SECRET);
    return isVerified;
};

export const DecodeToken = (token: string): any => {
    const decoded = jwt.decode(token);
    return decoded;
};

