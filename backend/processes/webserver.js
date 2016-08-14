const express = require('express'),
    error = require('../middleware/error'),
    //bodyParser = require('body-parser'),
    config = require('../config');

const app = express();
app.use(error);
app.use(express.static('public'));
app.set('view engine', 'ejs');
require('../routes')(app);

const server = app.listen(config.http.port, () => {
    const address = server.address();
    console.log('Webserver running on', [
        'http://', address.address === '::' ? 'localhost' : address.address, ':',
        address.port
    ].join(''));
});
