import mongoose from "mongoose";

const connectDatabase = async () => {
    mongoose.connect("mongodb://localhost:27017/erroHandlerExpress", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("Database is connected Successfully"))
        .catch((err) => console.log("Database is not connected successfuly"))
}
export default connectDatabase