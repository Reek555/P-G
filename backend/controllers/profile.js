const Photos = require("../models/photosModel")



async function getProfile (req, res) {
    const photos = await Photos.find({op: req.currentUser.id})
    res.send({photos: photos, user: req.currentUser})
}



module.exports = getProfile