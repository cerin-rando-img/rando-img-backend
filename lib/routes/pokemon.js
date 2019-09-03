const { Router } = require('express');
const randomImage = require('../middleware/randomImage');

module.exports = Router()
  .get('/:id', randomImage, (req, res) => {
    const pokemon = req.image.filter(image => image._id === req.params.id)[0];
    console.log(pokemon);
    const pokemonData = { _id: pokemon._id, url_image: pokemon.url_image, pokemon: pokemon.pokemon };
    console.log(pokemonData, 'pokemonData');
    res.send(pokemonData);

  });

