
const Photos = require("../models/photosModel")


async function edit (req, res) {
    const photo = await Photos.findOne({name: req.body.name})
    photo.title = req.body.title, 
    photo.description = req.body.description

    if (req.body.updatedLikes) {
        if (req.body.updatedLikes.liked) {
            photo.likes.push(req.currentUser.id)
        }
        else {
            let userIndex =  photo.likes.findIndex(i => i._id == req.currentUser.id)
            photo.likes.splice(userIndex, 1)
        }
    }

    //photo.likes: [{id: ________}]
    await photo.save()
    res.send({success: true})
}



module.exports = edit