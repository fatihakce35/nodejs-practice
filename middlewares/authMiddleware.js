import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import cookie from "cookie-parser"
  


const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.jwt_key, async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.locals.user = null
                next()
            }
            else {
                const user = await User.findById(decodedToken.userId)
                
                res.locals.user = user
                next()
            }
        })
    }
    else {
        res.locals.user = null
        next()
    }
}

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt //getting token from cookies

        if (token) {
            jwt.verify(token, process.env.jwt_key, err => { //token check
                if (err) {
                    console.log(err)
                    res.redirect("/login") 
                }
                else {
                    next()
                }
                
            })

        } else {
            res.redirect("/login")
        }
    }

    catch (error) {
        res.status(401).json({
            succedeed: false,
            error

        })
    }
}

export {authenticateToken, checkUser}