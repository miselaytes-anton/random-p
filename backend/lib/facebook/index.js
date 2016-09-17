const rp = require('request-promise'),
  token = require('../../../api_keys.json').facebook.token;

module.exports.publish = post => {
  const options = {
    uri: 'https://graph.facebook.com/v2.7/woblyblog/feed',
    qs: {
      message: post._roboCaption,
      caption: `Word: ${post.word}; Tags: ${post._tags.join(', ')}`,
      link: post.image.link
    },
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    json: true
  };

  return rp(options);
};