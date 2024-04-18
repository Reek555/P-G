const Photos = require("../models/photosModel");
const jwt = require("jsonwebtoken");
require("dotenv").config()


async function uploading (req, res) {
    const payload = jwt.verify(req.body.authorization, process.env.SECRET)
    const currentUser = payload;


    let photo = new Photos({
        name: req.file.filename,
        title: req.body.title, 
        description: req.body.description,
        op: currentUser.id
    })
    await photo.save()
    res.redirect(process.env.CLIENT_SITE)
}

module.exports = uploading