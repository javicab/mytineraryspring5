const mongoose = require('mongoose');

let CommentSchema = mongoose.Schema({
    comment: {
      type: String
    },

    date: {
      type: Date

    },

    userId:{
      type: mongoose.Schema.Types.ObjectId, ref: 'users'  
    },

    itineraryId:{
      type: mongoose.Schema.Types.ObjectId, ref: 'itineraries'  
    }
});

module.exports = mongoose.model("comments", CommentSchema);

