const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  }, 
  pokemon: {
    type: String
  },
  url_image: {
    type: String
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
