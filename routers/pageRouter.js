import express from "express"
import * as pages from "../controllers/pageController.js"

const router = express.Router()

router.route("/").get(pages.getMainPage)

router.route("/about").get(pages.getAboutPage)


export default router