import express from "express"
import "dotenv/config"
import connection from "./mongo_db.js"

import router from "./routers/pageRouter.js"
import photoRoute from "./routers/photoRouter.js"
import userRouter from "./routers/userRouter.js"

const app = express()
   
//template engine
app.set("view engine", "ejs")
  


//connection to our db
connection()

//static files
app.use(express.static('public'))
 

//routes. so we can make it easier to route

app.use(express.json())

// adding this feature because of getting data from html data
app.use(express.urlencoded({extended: true}))
app.use("/", router)
app.use("/photos", photoRoute)

// user register router

app.use("/users", userRouter)

/* old
app.get("/", (req, res) => {
    res.render("index")
})


// rendering about page
app.get("/about", (req, res) => {
    res.render("about")
})

*/
 
 
app.listen(process.env.port, () => {
    console.log(`Server running on port: ${process.env.port}`)

})
