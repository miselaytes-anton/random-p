const rp = require('request-promise'),
  api_key = require('./api_key'),
  _ = require('lodash');


module.exports.get = url => {
  const options = {
    uri: 'https://api.projectoxford.ai/vision/v1.0/analyze',
    qs: {
      visualFeatures: 'Categories,Description,Tags'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    method: 'POST',
    body: {
      url: url
    },
    json: true // Automatically parses the JSON string in the response
  };
  _.assign(options.qs, api_key);

  return rp(options)
    .then(res => {

      //console.log(JSON.stringify(res));

      return {
        tags: _.map(res.tags, 'name'),
        categories: _.map(res.categories, 'name'),
        caption: _.get(res, ['description', 'captions', 0, 'text'])
      };
    }).catch(err => {
      console.error('ms error', err);

      return {
        tags: [],
        categories: [],
        caption: ''
      };
    });
};
/*
 https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa

 POST https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories,Description,Tags&subscription-key={subscription_key}
 */
