const mongoose = require("mongoose")

const signUpSchema = mongoose.Schema({
    Email:{type:Email,required:true,unique:true},
    Password:{type:Password,required:true},
    ConfirmPassword:{type:Password,required:true}
})

const signupModel = new mongoose.model("signUpData",signUpSchema);

module.exports = signupModel;