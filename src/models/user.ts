
import { Document, Model, model, Schema } from "mongoose";
import { encrypt } from '../utils/brcypt';

// Schema
const UserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});


// DO NOT export this
interface IUserSchema extends Document {
    email: string,
    password: string
}

// Virtuals

// Methods

UserSchema.methods.Email = function() {
    return this.email;
};

interface IUserBase extends IUserSchema {
    // declare any virtuals and methods here
    getEmail(): string;
}

// Export this for strong typing
// export interface IUser extends IUserBase {
// company: ICompany["_id"]
// }
export type IUser = IUserBase

/**
 * enable this to export a poplated form here */ 
// export interface IUser_populated extends IUserBase { }
export type IUser_populated = IUserBase;

// Static methods
UserSchema.statics.findByEmail = async function(email: string) {
    return this.findById(email).exec();
};

// For model
// export interface IUserModel extends Model<IUser>
export type IUserModel = Model<IUser>

// Document middlewares
UserSchema.pre<IUser>("save", function() {
    if (this.isModified("password")) {
        this.password = encrypt(this.password);
    }
});

// Query middlewares
UserSchema.post<IUser>("findOneAndUpdate", async function() {
    // await updateCompanyReference(doc);
});

// Default export
export default model<IUser, IUserModel>("User", UserSchema);
