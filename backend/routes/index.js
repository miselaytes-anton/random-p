'use strict';

const mdb = require('../models/mongo'),
  _ = require('lodash');

const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

const formatPostForView = p => {
  const msTags = _.get(p, ['msAnalysis', 'tags']) || [];
  const ibmTags = _.get(p, ['ibmAnalysis', 'tags']) || [];

  const roboCaption = p.msAnalysis && p.msAnalysis.caption ?
    capitalize(p.msAnalysis.caption)
    : 'I do not know';

  return _.assign(p, {
   // _title:  capitalize(p.word),
    _tags: _.uniq(msTags.concat(ibmTags)),
    _sourceCaption: p.image.title,
    _roboCaption: roboCaption
  });
};


module.exports = app => {
    app.get('/', (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const postPerPage = 7;

        return mdb.collection('posts').count({})
          .then(count => mdb.collection('posts').find({}).sort({_id: -1}).skip((page - 1) * postPerPage).limit(postPerPage)
            .then(posts => res.render('index', {
              posts: posts.map(formatPostForView),
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

