import mongoose, { Mongoose } from "mongoose";

const {Schema} = mongoose

const photoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        required: true,
        trim: true

    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
})

const Photo = mongoose.model("photos", photoSchema)

export default Photo