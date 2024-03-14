const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema ({
    user:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true
    }
})

module.exports = userSchema;