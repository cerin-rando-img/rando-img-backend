const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  pokemon: {
    type: String
  },
  url_image: {
    type: String
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
