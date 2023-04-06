import express from "express"
import { createUser } from "../controllers/userController.js"

const router = express.Router()


// post request routering  
router.route("/register").post(createUser)

export default router