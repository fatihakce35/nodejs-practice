import mongoose, { Mongoose } from "mongoose";

import bcrypt from "bcrypt"

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


//hashing the user password before save to our mongodb
userSchema.pre("save", function(next) {
    const user = this
    console.log(`Before hash: ${user.password}`)
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {console.log(err); return}
        user.password = hash
        console.log(`After hash: ${user.password}`)
        next()
    })
})

//export
const User = mongoose.model("user", userSchema)

export default User