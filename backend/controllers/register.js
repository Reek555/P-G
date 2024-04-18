const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const bcrypt  = require("bcrypt")
require("dotenv").config()



async function register (req, res) {
    //res.sendFile('/index.html', {root: __dirname});


    try {
        let {name, email, password} = req.body
        if (password.length >= 6) {
            password  = bcrypt.hashSync(password, 8)
        }
        let user = new Users ({name, email, password})
        await user.save();

        const expiresIn = "2h"
        const accessToken = jwt.sign ({id: user.id, name: user.name}, process.env.SECRET, {expiresIn})

        res.send({
            accessToken: accessToken
        })
    }

    catch (err) {

        let validationErrors = {}
        
        if (err.errors) {
            for (let i in err.errors) {
                validationErrors[i] = err.errors[i]["message"]
            }
        }

        if (err.code == 11000) {
            validationErrors.email = "this email have been used before"
        }

        res.status(500).send(validationErrors)

        console.log (err)
    }

}

module.exports  = register