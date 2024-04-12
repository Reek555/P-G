const express = require("express")
const router  = express.Router()
const Photos = require("../models/photosModel")



router.get ("/:name", async (req, res) => {
    await Photos.deleteOne({name: req.params.name});
    console.log(req.params.name)
    res.send({
        success: true
    })
})



module.exports = router