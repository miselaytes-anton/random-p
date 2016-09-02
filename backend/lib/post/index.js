'use strict';

const Promise = require('bluebird'),
  getWord = require('../word').get,
  getImage = require('../image').get,
  getIbmAnalysis = require('../ibm_analysis').get,
  getMsAnalysis = require('../ms_analysis').get,
  getRoboName = require('../robo_name').get,
  mdb = require('../../models/mongo');

const checkWordDuplicate = word =>
  mdb.collection('posts').findOne({word: word})
    .then(post => post ? Promise.reject({word: word, code: 'word_duplicate'}) : Promise.resolve());

const checkImageDuplicate = (image, word) =>
  mdb.collection('posts').findOne({'image.link': image.link})
    .then(post => post ? Promise.reject({word: word, code: 'image_duplicate'}) : Promise.resolve());


exports.get = () => {

  let postData = {
    word: '',
    author: getRoboName(),
    ibmAnalysis: {
      tags: []
    },
    msAnalysis: {
      tags: [],
      caption: '',
      categories: []
    },
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
    .tap(image => getIbmAnalysis(image.link).then(analysis => postData.ibmAnalysis = analysis))
    .tap(image => getMsAnalysis(image.link).then(analysis => postData.msAnalysis = analysis))
    .then(() => postData);
};
