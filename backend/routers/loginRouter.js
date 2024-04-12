const express = require("express")
const router  = express.Router()
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const bcrypt  = require("bcrypt")
require("dotenv").config()



router.post ('/', async (req, res) => {
    //res.sendFile('/index.html', {root: __dirname});


        let user = await Users.findOne({
            email: req.body.email
        });

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            
            const expiresIn = "2h"
            const accessToken = jwt.sign ({id: user.id, name: user.name}, process.env.SECRET, {expiresIn})
            return res.send({
                success: true,
                accessToken: accessToken  
            })
        }
        res.status(500).send("invalid credentials!")


})

module.exports  = router