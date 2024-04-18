const express = require("express")
const router  = express.Router()
const edit = require ("../controllers/edit")

router.post("/", edit)



module.exports = router