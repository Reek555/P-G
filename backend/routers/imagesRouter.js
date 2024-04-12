const express = require("express")
const router  = express.Router()
const path = require('path');
const Photos = require("../models/photosModel")


router.get("/", async (req, res) => {
    //sending all photo names from the database
    const photos = await Photos.find()
    res.send(photos)
    
})


router.get("/:name", (req, res) => {

    res.sendFile(path.resolve(`userUploadedFiles/${req.params.name}`))


}) 




module.exports = router