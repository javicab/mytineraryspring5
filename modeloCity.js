const mongoose = require('mongoose');

let CitiesSchema = mongoose.Schema({
    name: {
      type: String
    },
    
    country: {
      type: String
    }
});

module.exports = mongoose.model("cities", CitiesSchema);

