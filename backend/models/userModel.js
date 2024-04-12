const mongoose = require("mongoose"); 
require("dotenv").config()


//'mongodb://127.0.0.1:27017/photos';
//mongoose.connect("mongodb+srv://rickswass:9bpClcBDMyAqHbVp@cluster0.1zeidif.mongodb.net/test")
mongoose.connect(process.env.LOCAL_DB);



const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "name is required"] 
    }, 
    email : {
        type: String,
        required: [true, "email is required"] ,
        unique: true
    }, 
    password: {
        type: String, 
        required: [true, "password is required"],
        minlength: [6, "password must be at least 6 digits long"]
    }

})


const Users = mongoose.model("User", UserSchema)


async function main () {
    
    let a = new Users({name: "the rick", email: "therick@gmail.com", password: "123456"});   // this is a promise
    a.save()
    console.log(1)

}



module.exports = Users; 