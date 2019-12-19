const mongoose = require('mongoose');

let ItinerarySchema = mongoose.Schema({
    title: {
        type: String
    },
   
    rating: {
        type: String
    },

    duration: {
        type: String
    },
    
    price:{
        type: String
    },

    hashtag:{
        type: Array
    },

    cityId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'cities'  
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    }


  });
  /*
  let collection = 'itinerarys';
  let Itinerary = mongoose.model('Itinerary', ItinerarySchema, collection);
*/
module.exports = mongoose.model("itineraries", ItinerarySchema);