const { Router } = require('express');
const Pokemon = require('../models/Pokemon');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    Pokemon
      .findById(req.params.id)
      .then(pokemon => res.send(pokemon))
      .catch(next);
  });
