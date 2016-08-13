'use strict';

const path = require('path'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    walk = require('walk');

module.exports = {};
module.exports.init = function () {

    return new Promise((resolve, reject) => {
        const root = __dirname;
        const controllers = {};
        const walker = walk.walk(root);
        walker.on('file', (directory, f, next) => {
            if (f.name !== 'index.js') {
                const file = [directory.replace(root, ''), f.name.replace('.js', '')].join('/').substr(1);
                const keys = file.replace(/\\/g, '/').split('/');
                let obj = controllers;
                _.each(keys, (key, index) => {
                    if (!obj[key]) {
                        obj[key] = {};
                    }
                    if (index === keys.length - 1) {
                        obj[key] = require(path.resolve([root, '/', file, '.js'].join('')));
                    } else {
                        obj = obj[key];
                    }
                    _.each(_.keys(obj[key]), key => {
                        console.log(`> ${file.replace(/\//g, '.')}.${key}`);
                    });
                });
            }
            next();
        });

        walker.on('error', reject);

        walker.on('end', () => resolve(controllers));
    });
};
