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


//login page render

const getLoginPage = async (req, res) => {
    res.render("login", {link: "login"})
}

const getLogoutPage = async (req, res) => {
    res.cookie("jwt", "", {
        maxAge:1
    })
    res.redirect("/")
}

export {getMainPage, getAboutPage, getRegisterPage, getLoginPage, getLogoutPage}