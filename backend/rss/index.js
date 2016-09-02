const RSS = require('rss'),
  mdb = require('../models/mongo'),
  _ = require('lodash'),
  blog = require('../constants/blog');

module.exports = (req, res) => {
  const baseUrl = 'http://words.amiselaytes.com';

  /* lets create an rss feed */
  const feed = new RSS({
    title: blog.title,
    description: blog.description,
    feed_url:  `${baseUrl}/rss`,
    site_url: baseUrl,
    image_url: `${baseUrl}/img/five-pears.jpg`,
    managingEditor: 'Anton Miselaytes',
    webMaster: 'Anton Miselaytes',
    language: 'en',
    categories: ['Arts', 'Words', 'Robots'],
    pubDate: new Date(),
    ttl: '60'
  });

  return mdb.collection('posts').find({}).sort({_id: -1}).limit(7)
    .then(posts => {
      /* loop over data and add to feed */
      _.each(posts, p => {
        const tags = (_.get(p, 'msAnalysis.tags') || []).concat(_.get(p, 'ibmAnalysis.tags') || []);
        feed.item({
          title:   _.get(p, 'msAnalysis.caption') || blog.defaultPostTitle,
          description: `<a href="${p.image.source}"> <img src="${p.image.link}"> <p>${p.image.title}</p> </a>`,
          url: `${baseUrl}/${p._id}`, // link to the item
          categories: tags,
          author: 'Robot', // optional - defaults to feed author property
          date: p.date // any format that js Date can parse.

        });

      });

      const xml = feed.xml();
      res.set('Content-Type', 'text/xml');

      return res.send(xml);
    }).catch(res.error);

};