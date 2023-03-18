import express from "express"

const app = express()
const port = 3000


//template engine
app.set("view engine", "ejs")


//static files
app.use(express.static('public'))




app.get("/", (req, res) => {
    res.render("index")
})


// rendering about page
app.get("/about", (req, res) => {
    res.render("about")
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)

})
