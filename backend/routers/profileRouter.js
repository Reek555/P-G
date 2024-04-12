const express = require("express")
const router  = express.Router()
const Photos = require("../models/photosModel")



router.get("/", async (req, res) => {
    const photos = await Photos.find({op: req.currentUser.id})
    res.send({photos: photos, user: req.currentUser})
})



module.exports = router