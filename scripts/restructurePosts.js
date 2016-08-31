'use strict';

const _ = require('lodash'),
  Promise = require('bluebird'),

  mdb = require('../backend/models/mongo');


mdb.collection('posts').find()
  .then(posts => {
    return Promise.each(posts, post =>{
      post.image = {link: post.link, title:post.title,source:post.source};
      delete post.link;
      delete post.title;
      delete post.source;
      return mdb.collection('posts').update({_id: post._id}, post);
      //console.log(JSON.stringify(post));
    });
  }).catch(console.error)