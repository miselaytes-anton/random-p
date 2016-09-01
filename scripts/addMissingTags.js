'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),
  getTags = require('../backend/lib/tags').get,
  mdb = require('../backend/models/mongo');


mdb.collection('posts').find({})
  .then(posts => {
    return Promise.map(posts, post => {


      if (!post.tags) {
        return getTags(post.image.link)
          .then(tags => {
            post.tags = tags;

            return mdb.collection('posts').update({_id: post._id}, post);
          });
      }

    }, {concurrency: 1});
  }).catch(console.error);
