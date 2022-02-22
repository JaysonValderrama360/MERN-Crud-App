const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    npi:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        rquired: true,
    },
    telephone:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        rquired: true,
    },
});

const UserModel = mongoose.model("user", UsersSchema);
module.exports = UserModel;