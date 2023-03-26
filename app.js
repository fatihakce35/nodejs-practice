import express from "express"
import "dotenv/config"
import connection from "./mongo_db.js"

import router from "./routers/pageRouter.js"
import photoRoute from "./routers/photoRouter.js"

const app = express()

//template engine
app.set("view engine", "ejs")



//connection to our db
connection()

//static files
app.use(express.static('public'))


//routes. so we can make it easier to route

app.use("/", router)
app.use("/photo", photoRoute)


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
