const mongoose = require('mongoose');

let LikeSchema = mongoose.Schema({

    userId:{
      type: mongoose.Schema.Types.ObjectId, ref: 'users'  
    },

    itineraryId:{
      type: mongoose.Schema.Types.ObjectId, ref: 'itineraries'  
  }
});

module.exports = mongoose.model("likes", LikeSchema);

