const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({

    profilePic: {
      type: String
    },

    email: {
      type: String
    },

    userName: {
      type: String
    },

    password: {
      type: String
    },

    active:{
      type: String
    }
});

module.exports = mongoose.model("users", UserSchema);

