import mongoose from "mongoose";

export const secretModel = new mongoose.Schema({
    name: {
        type: String,
    },
    description : {
        type: String,
    },
    flor : {
        type: String,
    },
    img: {
        type: String,
    },
    location: {
        type : Array,
    },
    isSecret : {
        type : Boolean
    },
    isUnlocked : {
        type : Boolean
    }
})

const secret = mongoose.model("secret", secretModel)
export default secret