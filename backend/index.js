const express = require('express'); 
const app = express();
const jwt = require("jsonwebtoken");
const registerRouter = require("./routers/registerRouter")
const loginRouter = require("./routers/loginRouter")
const uploadingRouter = require("./routers/uploadingRouter")
const imagesRouter = require("./routers/imagesRouter")
const editRouter = require("./routers/editRouter")
const profileRouter  = require("./routers/profileRouter")
const deleteRouter = require("./routers/deleteRouter")
const cors  = require("cors")
require("dotenv").config()


app.use(cors())
app.use(express.json()); 

app.post ("/", (req, res) => {
    //res.redirect("http://localhost:3000")
    res.send ({success: true})
})

app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/images", imagesRouter)
app.use("/uploads", uploadingRouter)


app.use((req, res, next) => {

    try {
        let token = req.headers["authorization"]        
        let payload = jwt.verify(token, process.env.SECRET);
        req.currentUser = payload;
        next()
    }
    
    catch (err){
        res.status(400).send("unauthorized")
    }
})

app.use ("/edit", editRouter)
app.use("/me", profileRouter)
app.use("/delete", deleteRouter)



app.listen(process.env.PORT, () =>{console.log ('server is running')})

