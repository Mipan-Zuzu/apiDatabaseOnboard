import mongoose from "mongoose";

export const onboarding = new mongoose.Schema({
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
    }
})

const onboard = mongoose.model("onboard", onboarding)
export default onboard