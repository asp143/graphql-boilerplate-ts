import User  from './user';

export interface SchemaType {
    User: typeof User
}

const schema: SchemaType = {
    User
};

export default schema;