const express = require("express");
const User = require("../model/users")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Posts = require("../model/Posts");

express().use(cookieParser())
const salt = bcrypt.genSaltSync(9);
const secret = "ghjft56ucvbkuyln8vcr6xsdtvygh";

const profile = async(req, res)=>{
    // res.json(req.cookie)
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err;
        res.json(info)
    })
}
const login = async(req, res)=>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        // res.status(200).json(userDoc)
        jwt.sign({username, id : userDoc._id}, secret, {}, (err, token)=>{
            if(err)throw err;
            // res.json(token)
            res.cookie('token', token).json("okay")
        })
    }else{
        res.json({"msg": "Invalid Login credentials"})
    }
}

const logout = async(req, res)=>{
    res.cookie('token', '').json('ok')
}

const register = async(req, res)=>{
    const {username, password} = req.body;
   try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)});
        console.log("User registered successfully, you can now log in as " + userDoc.username);
        res.status(200).json(userDoc)
   } catch (error) {
        res.status(400).json(error)
   }
}



module.exports = {login,register,profile}