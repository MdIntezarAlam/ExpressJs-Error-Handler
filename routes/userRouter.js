
import express from 'express'
import { userSignup } from '../controller/userController.js'
const router = express.Router()


router.get("/user", userSignup)

export default router
