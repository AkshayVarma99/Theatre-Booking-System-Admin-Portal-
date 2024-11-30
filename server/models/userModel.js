const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
    type: Boolean,
    required: true,
    default: true,
},



}, 
{
    timestamps: true,

}
    ); 


    module.exports=mongoose.model("users",userSchema);