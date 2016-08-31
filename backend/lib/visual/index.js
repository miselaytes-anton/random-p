const rp = require('request-promise'),
  api_key = require('./api_key'),
  _ = require('lodash');


module.exports.getClasses = url => {
  const options = {
    uri: 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify',
    qs: {
      url: url,
      version: '2016-05-19'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };
  _.assign(options.qs, api_key);

  return rp(options)
    .then(res => {
      if (res.status === 'ERROR') {
        return [];
      }
      //console.log(JSON.stringify(res));

      return _.map(_.get(res, ['images', 0, 'classifiers', 0, 'classes']), 'class');
    });
};
//http://www.ibm.com/watson/developercloud/visual-recognition/api/v3/?curl#classify_an_image
//https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key={api_key}&url=http://www.metmuseum.org/toah/images/h5/h5_29.100.498_av1.jpg&version=2016-05-19