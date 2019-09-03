const { Router } = require('express');
const Pokemon = require('../models/Pokemon');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      _id,
      pokemon,
      url_image
    } = req.body;

    Pokemon
      .create({ _id, pokemon, url_image })
      .then(pokemon => res.send(pokemon))
      .catch(next);
  });
