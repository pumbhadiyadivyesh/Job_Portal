const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserAuthSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const UserAuth = mongoose.model('Userauth',UserAuthSchema)
module.exports = UserAuth