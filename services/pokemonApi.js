const request = require('superagent');

function randomImage() {
  return request
    .get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    .then(res => res.body);
}

module.exports = { randomImage };
