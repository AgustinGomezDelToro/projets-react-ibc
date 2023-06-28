import {Schema} from 'mongoose';

export interface User {
    _id: string;
    login : string;
    password : string;
}

const userSchema = new Schema<User>({
    login: {
    type : Schema.Types.String,
    unique : true,
    required : true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
}, {
    collection: 'users',
    versionKey: false
});

export const Model<User> = mongoose.model('User', userSchema);
