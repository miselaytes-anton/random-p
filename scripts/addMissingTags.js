'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),
  getClasses = require('../backend/lib/visual').getClasses,
  mdb = require('../backend/models/mongo');


mdb.collection('posts').find({})
  .then(posts => {
    return Promise.map(posts, post => {


      if (!post.tags) {
        return getClasses(post.image.link)
          .then(classes => {
            post.tags = classes;

            return mdb.collection('posts').update({_id: post._id}, post);
          });
      }

    }, {concurrency: 1});
  }).catch(console.error);
