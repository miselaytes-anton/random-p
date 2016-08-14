const cron = require('node-cron'),
  _ = require('lodash'),
  getWord = require('../lib/word').get,
  getImage = require('../lib/image').get,
  mdb = require('../models/mongo');


const insert = () => {
  // get random word
  //get image for the word
  // insert into mongo
  return getPost().then(post => mdb.collection('posts').insert(post))
    .catch(err => console.log(err));

};

const getPost = () => {
  return getWord()
    .then(word => getImage(word).then(image => {
      if (image){
        console.log(`${word} - ok`);

        return _.assign(image, {word: word, date: new Date()});
      } else {
        console.log(`${word} - not found`);

        return getPost();
      }

    }));
};

exports.schedule = () => {
  console.log(`Hi, I'm a scraper. I generate content and insert into DB`);

  // insert every hour
  cron.schedule('0 0 * * *', () => {
    console.log('Generating a post', new Date());
    insert();
  });
};

exports.insert = insert;

