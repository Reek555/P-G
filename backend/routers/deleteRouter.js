const express = require("express")
const router  = express.Router()
const deleting = require("../controllers/delete")



router.get ("/:name", deleting)



module.exports = router