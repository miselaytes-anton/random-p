const env = process.env.NODE_ENV || 'dev';
const path = `./${env}.js`;

console.log(['loaded ', env, ' configuration'].join(''));
module.exports = require(path);
