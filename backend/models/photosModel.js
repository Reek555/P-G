const mongoose = require("mongoose"); 
require("dotenv").config()


//mongoose.connect('mongodb://127.0.0.1:27017/test');
//mongoose.connect("mongodb+srv://rickswass:9bpClcBDMyAqHbVp@cluster0.1zeidif.mongodb.net/test")
mongoose.connect(process.env.LOCAL_DB);

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "why no name?"] 
    }, 
    title : {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    op: {
        type: "objectId"
    }, 
    likes: [{
        user: {type: String }
    }]

})


const Photos = mongoose.model("Photo", UserSchema)


async function main () {
    
    let a = new Users({name: "the rick", email: "therick@gmail.com", password: "123456"});   // this is a promise
    a.save()
    console.log(1)

}



module.exports = Photos; 