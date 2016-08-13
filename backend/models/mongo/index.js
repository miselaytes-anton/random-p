const pmongo = require('promised-mongo'),
    fs = require('fs'),
    _ = require('lodash'),
    path = require('path'),
    config = require('../../config');

const mdb = pmongo(config.mongodb.database);
fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js' || !_.includes(file, '.js')) {
        return;
    }
    const modelName = file.replace('.js', '');
    const collection = mdb.collection(modelName);
    const classMethods = require(path.resolve(__dirname, file))(collection);

    mdb[modelName] = collection;
    _.merge(mdb[modelName], classMethods); // assign class methods

});

module.exports = mdb;
