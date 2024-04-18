const express = require ("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const uploading = require("../controllers/upload")


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




router.post ("/", upload.single ("photo"), uploading)

module.exports = router