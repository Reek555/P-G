const path = require('path');
const Photos = require("../models/photosModel")


async function getImages (req, res) {
    //sending all photo names from the database
    const photos = await Photos.find()
    res.send(photos)
    
}


async function getImage (req, res) {

    res.sendFile(path.resolve(`userUploadedFiles/${req.params.name}`))
} 




module.exports = {getImages, getImage}