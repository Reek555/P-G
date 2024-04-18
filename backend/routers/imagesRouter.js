const express = require("express")
const router  = express.Router()
const {getImages, getImage} = require("../controllers/images")



router.get("/", getImages)


router.get("/:name", getImage) 




module.exports = router