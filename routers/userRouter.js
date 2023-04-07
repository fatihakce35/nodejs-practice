import express from "express"
import { createUser, getUser, getDashboard } from "../controllers/userController.js"
import { authenticateToken } from "../middlewares/authMiddleware.js"
const router = express.Router()


// post request routering  
router.route("/register").post(createUser)
router.route("/login").post(getUser)
router.route("/dashboard").get(authenticateToken, getDashboard) // before reach dashboard check token

export default router