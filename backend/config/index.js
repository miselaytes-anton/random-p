// don't modify this file!
// create a file xxx.js to create environment xxx

const env = process.env.NODE_ENV || 'dev';
const path = `./${env}.js`;

console.log(['loaded ', env, ' configuration'].join(''));
module.exports = require(path);
