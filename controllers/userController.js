import User from "../models/userModel.js"
import bcrypt from "bcrypt"

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
                message: `logging as ${username}`
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

export {createUser, getUser}