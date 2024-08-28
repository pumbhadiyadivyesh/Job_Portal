const UserAuth = require('../model/Userauth')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Secure = async function (req,res,next) {
    try {
        const token = req.headers.athorization
        if (!token) {
            throw new Error('Please Attach Token')
        }   
        const isToken = jwt.verify(token,user)
        if (!isToken) {
            throw new Error("Token Not Verify")
        }
        const CkeckUser = await UserAuth.findById(token.id)
        if (!CkeckUser) {
            throw new Error("User Not Found")
        }
        next()
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}

exports.SignUp = async function(req,res){
    try {
        const Signup = req.body
        if (!Signup.name || !Signup.email || !Signup.password) {
            throw new Error('Please Enter All Data')
        }
        Signup.password = await bcrypt.hash(Signup.password,10)
        const UserData = await UserAuth.create(req.body)
        const token =  jwt.sign({id:UserData.id},'USER')
        res.status(200).json({
            Success:true,
            message:"User SignUp Successfully",
            data:UserData,
            token
        })
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }
}
exports.Login = async function (req,res) {
    try {
        const Login = req.body
        if (!Login.email || !Login.password) {
            throw new Error('Please Enter All Field')
        }
        const isUser = await UserAuth.findOne({email:Login.email})
        if(!isUser){
            throw new Error("User Is Not found")
        }
        const isCorrectPass = await bcrypt.compare(Login.password,isUser.password)
        if (!isCorrectPass) {
            throw new Error("Password Or Email Is Wrong")
        }
        rs.status(201).json({
            Success:true,
            message:"Login Succesfully",
            data:isUser
        })
    } catch (error) {
        res.status(404).json({
            Success:false,
            message:error.message
        })
    }   
}