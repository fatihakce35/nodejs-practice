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

export {getMainPage, getAboutPage, getRegisterPage, getLoginPage}