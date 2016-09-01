'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),
  getMsAnalysis = require('../backend/lib/ms_analysis').get,
  mdb = require('../backend/models/mongo');


mdb.collection('posts').find({})
  .then(posts => {
    return Promise.map(posts, post => {


      if (!post.msAnalysis) {
        return getMsAnalysis(post.image.link)
          .then(analysis => {
            console.log(JSON.stringify(analysis));
            post.msAnalysis = analysis;

            return mdb.collection('posts').update({_id: post._id}, post);
          });
      }

    }, {concurrency: 1});
  }).catch(console.error);
