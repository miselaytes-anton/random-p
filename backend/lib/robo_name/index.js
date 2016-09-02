const randomName = require('random-name');

const randomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const randomPositiveInt = max => randomInt(0, max);
const randomInt09 = () => randomPositiveInt(9);

const randomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = randomPositiveInt(letters.length)

  return letters.charAt(index);
};

exports.get = () => `${randomName.first()} ${randomLetter()}${randomLetter()}${randomInt09()}${randomInt09()}${randomInt09()}`;
