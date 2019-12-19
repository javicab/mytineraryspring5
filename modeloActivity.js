const mongoose = require('mongoose');

let ActivitySchema = mongoose.Schema({
    name: {
        type: String
    },
    
    address: {
        type: String
    },
    
    activityPic: {
        type: String
    },

    duration: {
        type: String
    },
    
    price:{
        type: String
    },

    description:{
        type: String
    },

    itineraryId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'itineraries'  
    }
  });

module.exports = mongoose.model("activities", ActivitySchema);