const mongoose = require("mongoose")

const loginSchema= mongoose.Schema({

})

const loginModel = mongoose.model("loginData",loginSchema);


module.exports = loginModel