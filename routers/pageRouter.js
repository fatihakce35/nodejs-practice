import express from "express"
import * as pages from "../controllers/pageController.js"


const router = express.Router()

router.route("/").get(pages.getMainPage) // adding authorization

router.route("/about").get(pages.getAboutPage)

router.route("/register").get(pages.getRegisterPage)

router.route("/login").get(pages.getLoginPage)

export default router