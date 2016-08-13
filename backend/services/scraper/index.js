const cron = require('node-cron'),
    _ = require('lodash'),
    Promise = require('bluebird'),
      getWord = require('../../lib/word').get,
      getImage = require('../../lib/image').get,
      mdb = require('../../models/mongo');


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

        return _.assign(image, {word: word});
      } else {
        console.log(`${word} - not found`);

        return getPost();
      }

    }));
};

exports.start = () => {
  console.log(`Hi, I'm a scraper`);

  // insert every hour
  cron.schedule('0 * * * *', () => {
    console.log('running a task every hour', new Date());
    insert();
  });
};

exports.insert = insert;

