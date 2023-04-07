import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"]
    console.log(`Auth: ${authHeader}`)

    const token = authHeader && authHeader.split(" ")[1] //getting token

    if (!token) {
        res.status(401).json({
            succeeded: false,
            message: "No token set" 
        })
    }

    req.user = await User.findById(
        jwt.verify(token, process.env.jwt_key).userId //decode the token
    )

    next() 
}

export {authenticateToken}