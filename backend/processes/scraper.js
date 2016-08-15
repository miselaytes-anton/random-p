const cron = require('node-cron'),
  _ = require('lodash'),
  Promise = require('bluebird'),
  getWord = require('../lib/word').get,
  getImage = require('../lib/image').get,
  mdb = require('../models/mongo');

const getPost = () => getWord()
  .then(word => mdb.collection('posts').findOne({word: word})
    .then(post => post ? Promise.reject({word: word, code: 'word_duplicate'}) : getImage(word))
    .then(image => {
      if (!image) {
        return Promise.reject({word: word, code: 'word_not_found'});
      }

      return mdb.collection('posts').findOne({link: image.link})
        .then(post => {
          if (post) {
            return Promise.reject({word: word, code: 'image_duplicate'});
          }

          return _.assign(image, {word: word, date: new Date()});
        });
    })
);


const insert = () => getPost()
  .then(post => {
    console.log(`${post.word} - ok`);

    return mdb.collection('posts').insert(post);
  })
  .catch(err => {

    switch (err.code) {
      case 'image_duplicate':
      case 'word_duplicate':
      case 'word_not_found':
        console.error(err.word, '-', err.code);

        return insert();
      default:
        console.error(err);
    }
  });


module.exports = {
  schedule: () => {
    console.log(`Hi, I'm a scraper. I generate content and insert into DB`);

    // insert every day
    cron.schedule('0 0 * * *', () => {
      console.log('Generating a post', new Date());
      insert();
    });
  },
  insert: insert
};