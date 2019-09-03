const { Router } = require('express');
const randomImage = require('../middleware/randomImage');

module.exports = Router()
  .get('/', randomImage, (req, res) => {
    const index = Math.floor(Math.random() * Math.floor(req.image.length));
    const pokemon = req.image[index];
    console.log(pokemon);
    const pokemonData = { _id: pokemon._id, url_image: pokemon.url_image, pokemon: pokemon.pokemon };
    console.log(pokemonData, 'pokemonData');
    res.send(pokemonData);

  });

