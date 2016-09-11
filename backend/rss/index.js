const RSS = require('rss'),
  mdb = require('../models/mongo'),
  _ = require('lodash'),
  blog = require('../constants/blog');

const getDescriptionHTML = p => `
  <a href="${p.image.source}">
    <img src="${p.image.link}">
    <p>${p.image.title}</p>
  </a>
  <strong>Word</strong>: ${p.word}<br>
  <strong>Tags</strong>: ${p._tags.join(', ')}
`;

module.exports = (req, res) => {
  const baseUrl = 'http://words.amiselaytes.com';

  /* lets create an rss feed */
  const feed = new RSS({
    title: blog.title,
    description: blog.description,
    feed_url:  `${baseUrl}/rss`,
    site_url: baseUrl,
    image_url: `${baseUrl}/img/wobly.png`,
    managingEditor: 'Wobly',
    webMaster: 'Anton Miselaytes',
    language: 'en',
    categories: ['Arts', 'Words', 'Robots'],
    pubDate: new Date(),
    ttl: '1440'
  });

  return mdb.posts.find({}).sort({_id: -1}).limit(7)
    .then(posts => {
      /* loop over data and add to feed */
      _.each(posts, p => {
        const post = mdb.posts.formatForView(p);
        feed.item({
          title:   post._roboCaption,
          description: getDescriptionHTML(p),
          url: `${baseUrl}/${p._id}`, // link to the item
          categories: p._tags,
          author: 'Wobly', // optional - defaults to feed author property
          date: p.date // any format that js Date can parse.

        });

      });

      const xml = feed.xml();
      res.set('Content-Type', 'text/xml');

      return res.send(xml);
    }).catch(res.error);

};