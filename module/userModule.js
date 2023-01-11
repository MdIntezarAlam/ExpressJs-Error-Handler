import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name Should not be empty! "]
    },
    email: {
        type: String,
        require: [true, "Email Should not be empty! "]
    }
})


const User = mongoose.model("usermodule", userSchema)
export default User