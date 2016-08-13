'use strict';
const Promise = require('bluebird'),
      fs = Promise.promisifyAll(require('fs'));

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

exports.get = () => {
  const numLines = 354985;
  const start = getRandomInt(1, numLines);

  return fs.readFileAsync(`${__dirname}/words.txt`)
    .then(wordsFile => {
      const words = wordsFile.toString().split('\n');

      return words[start];
    });

};


