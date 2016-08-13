const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    routes = require('./routes'),
    cors = require('./middleware/cors'),
    error = require('./middleware/error');

const app = express();
app.use(cors);
app.use(error);
app.use(bodyParser.json());
app.use(bodyParser.raw({limit: '50mb'}));
routes(app, express);

const server = app.listen(config.http.port, () => {
    const address = server.address();
    console.log('Webserver running on', [
        'http://', address.address === '::' ? 'localhost' : address.address, ':',
        address.port
    ].join(''));
});
