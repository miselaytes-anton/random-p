'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),
  getRoboName = require('../backend/lib/robo_name').get,
  mdb = require('../backend/models/mongo');


mdb.collection('posts').find({})
  .then(posts => {
    return Promise.map(posts, post => {
      post.author = getRoboName();

      return mdb.collection('posts').update({_id: post._id}, post);

    });
  }).catch(console.error);

