const Photos = require("../models/photosModel")
const fs = require("fs")



async function deleting (req, res) {
    await Photos.deleteOne({name: req.params.name});
    fs.unlink(`userUploadedFiles/${req.params.name}`, function (err) {
        console.log (1)
      });
    res.send({
        success: true
    })
}



module.exports = deleting