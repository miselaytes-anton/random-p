'use strict';

const cron = require('node-cron'),
  getPost = require('../lib/post').get,
  mdb = require('../models/mongo');


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