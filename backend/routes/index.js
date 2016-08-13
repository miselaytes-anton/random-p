'use strict';

const Controllers = require('../controllers');


module.exports = function (app) {
    Controllers.init().then(controllers => {
        app.get('/api/posts', controllers.api.posts.index);

        app.get('*', (req, res) => {
            res.status(404).send('Resource not found');
        });

    }, () => {
        console.log('API cannot be initialised.');
    });
};
