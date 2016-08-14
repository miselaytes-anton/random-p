const rp = require('request-promise'),
  api_key = require('./api_key'),
  _ = require('lodash')

exports.get = word => {


  const options = {
    uri: 'https://www.googleapis.com/customsearch/v1',
    qs: {
      q: `${word}`,
      imgType: 'photo',
      fileType: 'jpg',
      searchType: 'image',
      imgSize: 'large',
      num: 1
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
  _.assign(options.qs, api_key);


  return rp(options).then(res => {

    return res.items && res.items.length ? {
      link: _.get(res, ['items', 0, 'link']),
      title: _.get(res, ['items', 0, 'title'])
    } : null;

  });

};