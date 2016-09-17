'use strict';

const mdb = require('../models/mongo'),
  posts = mdb.posts,
  blog = require('../constants/blog'),
  _ = require('lodash');


module.exports = app => {
    app.get('/', (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const postPerPage = 7;

        return posts.count({})
          .then(count => posts.find({}).sort({_id: -1}).skip((page - 1) * postPerPage).limit(postPerPage)
            .then(postsDB => res.render('index', {
              posts: postsDB.map(posts.formatForView),
              page: page,
              hasOlder: (count - page * postPerPage) > 0,
              hasNewer: page > 1,
              blog: blog
            }))
            .catch(err => res.error(err)));

    });

  app.get('/about', (req, res) => {
    res.render('about', { blog: blog});
  });

    app.get('/api/posts', (req, res) =>
      posts.find({}).sort({_id: -1})
      .then(posts => res.json(posts))
      .catch(err => res.error(err)));


    app.get('/rss', require('../rss'));
    app.get('*', (req, res) => res.status(404).json({error: 404, message: 'not found'}));
};

