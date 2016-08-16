'use strict';

const mdb = require('../models/mongo');


module.exports = app => {
    app.get('/', (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const postPerPage = 7;

        return mdb.collection('posts').count({})
          .then(count => mdb.collection('posts').find({}).sort({_id: -1}).skip((page - 1) * postPerPage).limit(postPerPage)
            .then(posts => res.render('index', {
              posts: posts,
              page: page,
              hasOlder: (count - page * postPerPage) > 0,
              hasNewer: page > 1
            }))
            .catch(err => res.error(err)));

    });

    app.get('/api/posts', (req, res) =>
      mdb.collection('posts').find({}).sort({_id: -1})
      .then(posts => res.json(posts))
      .catch(err => res.error(err)));

    app.get('*', (req, res) => res.status(404).json({error: 404, message: 'not found'}));
};
