import express from "express"
import * as photoController from "../controllers/photoController.js"

const router = express.Router()


// post request routering
router.route("/").post(photoController.createPhoto)

// get request routering
router.route("/").get(photoController.getAllPhoto)


export default router