'use strict';

const Promise = require('bluebird'),
  getWord = require('../word').get,
  getImage = require('../image').get,
  getTags = require('../visual').get,
  mdb = require('../../models/mongo');

const checkWordDuplicate = word =>
  mdb.collection('posts').findOne({word: word})
    .then(post => post ? Promise.reject({word: word, code: 'word_duplicate'}) : Promise.resolve());

const checkImageDuplicate = (image, word) =>
  mdb.collection('posts').findOne({'image.link': image.link})
    .then(post => post ? Promise.reject({word: word, code: 'image_duplicate'}) : Promise.resolve());


exports.generate = () => {

  let postData = {
    word: '',
    tags: [],
    image: {
      link: '',
      source: '',
      title: ''
    },
    date: new Date()
  };

  return getWord()
    .tap(checkWordDuplicate)
    .tap(word => postData.word = word)
    .then(getImage)
    .tap(image => image ? Promise.resolve() : Promise.reject({word: postData.word, code: 'word_not_found'}))
    .tap(image => checkImageDuplicate(image, postData.word))
    .tap(image => postData.image = image)
    .then(image => getTags(image.link))
    .then(tags => postData.tags = tags)
    .then(() => postData);
};
