const getMainPage = (req, res) => {
    res.render("index", {
        link: "index"
    })
}
 
const getAboutPage = (req, res) => {
    res.render("about", {
        link: "about"
    })
}

//render page
const getRegisterPage = async (req, res) => {
    res.render("register", { link: "register"})
   
    
}

export {getMainPage, getAboutPage, getRegisterPage}