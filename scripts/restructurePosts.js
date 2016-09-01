'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),

  mdb = require('../backend/models/mongo');


mdb.collection('posts').find()
  .then(posts => {
    return Promise.each(posts, post =>{
      post.ibmAnalysis = {tags: post.tags};
      delete post.tags;

      return mdb.collection('posts').update({_id: post._id}, post);
      //console.log(JSON.stringify(post));
    });
  }).catch(console.error)