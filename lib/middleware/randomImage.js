const { randomImage } = require('../../services/pokemonApi');

module.exports = (req, res, next) => {
  randomImage()
    .then(image => {
      req.image = image.results;
      next();
    });
};
