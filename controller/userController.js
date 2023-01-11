import { asyncCatch } from "../utils/Middleware/asyncCatchError.js";
import User from '../module/userModule.js'
import ErroHandler from "../utils/Middleware/ErrorHandler.js";

export const userSignup = asyncCatch(async (req, res, next) => {

    const user = await User.findOne({ email: req.body })
    //agr user hai tho erro show hoga else new user create hoga
    if (user) {
        return next(new ErroHandler("User is Already Exist", 400));
    }

    await User.create({
        name: "name-alam",
        email: "email-email."
    })
    res.status(201).json({
        message: "User Added Successfully ...!"
    })
})