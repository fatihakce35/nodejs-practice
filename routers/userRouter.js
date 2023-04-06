import express from "express"
import { createUser, getUser } from "../controllers/userController.js"

const router = express.Router()


// post request routering  
router.route("/register").post(createUser)
router.route("/login").post(getUser)

export default router