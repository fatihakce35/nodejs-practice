const getMainPage = (req, res) => {
    res.render("index")
}

const getAboutPage = (req, res) => {
    res.render("about")
}

export {getMainPage, getAboutPage}