import mongoose, { Mongoose } from "mongoose";

const {Schema} = mongoose

// for user, creating a db model

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


//export
const User = mongoose.model("user", userSchema)

export default User