import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//post request
const createUser = async (req, res) => {

    try {
       
        const user = await User.create(req.body)
        res.status(201).json({
            succeded: true,
            user
        }) 

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
    
}


const getUser = async (req, res) => {

    try {
        const {username, password} = req.body //getting username and password from html body

        const user = await User.findOne({username}) //searching username and password in our mongoose
        let same = false // password checking bool
       
        
        if (user) { //if founded
            same = await bcrypt.compare(password, user.password) // checking password match
        } else {
            return res.status(401).json({
                succeded: false,
                error: "There is no user" //responeding error
            })
        }

        if (same) { //if user founded and password is match then succed
            res.status(201).json({
                succeded: true,
                message: `logging as ${username}`,
                user_info: user,
                token: createToken(user._id)
            })
        } else {
            return res.status(401).json({ //else responding error
                succeded: false,
                message: "password incorrect !"
            })
            
        }


        

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
    
}

// creating a json web token
const createToken = (userId) => {
    return jwt.sign({userId}, process.env.jwt_key, {
        expiresIn: "1d"
    })

}


export {createUser, getUser}