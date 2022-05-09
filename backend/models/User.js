const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter your name"],
    },

    avatar:{
        public_id: String,
        url: String,
    },

    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:[true, "This email already exists"],
    },

    password:{
        type:String,
        required:[true, "Please enter a password"],
        minlength:[6,"Password should be more than 6 characters"],
        select: false,
    },

    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],

    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],

    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
});

module.exports = mongoose.model("User", userSchema);