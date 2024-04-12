const express = require ("express")

const router = express.Router()
const multer = require("multer")
const path = require("path")
const Photos = require("../models/photosModel");
const jwt = require("jsonwebtoken");
require("dotenv").config()





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'userUploadedFiles/')
    },
    filename: (req, file, cb) => {
        const name = Date.now()
        const ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + name + ext)

    }
})

const upload = multer ({
    storage: storage, 
    dest: "userUploadedFiles/"
})




router.post ("/", upload.single ("photo"), async (req, res) => {
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
})

module.exports = router