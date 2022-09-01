const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const propModel = require("../models/propSchema");
const userModel = require("../models/userSchema");
dotenv.config();
const secretKey = process.env.secretKey;

router.get("/view",async(req,res)=>{
    try{
        const mail = jwt.verify(req.headers.authorization, secretKey);
        userModel.find({mail:mail}).then((userData)=>{
            if(userData.length){
                propModel.find({mail:mail}).then((data)=>{
                    res.send(data);
                })
            }else{
                res.json("Invalid user");
            }
        })
    }catch(err){
        res.json(err);
    }
})

module.exports = router;