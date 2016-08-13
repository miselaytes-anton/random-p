const express = require('express'),
    mdb = require('./models/mongo'),
    //bodyParser = require('body-parser'),
    config = require('./config');

const app = express();

app.get('/api/posts', (req, res) => {

    return mdb.collection('posts').find({})
        .then(posts => res.json(posts));
});

app.get('*', (req,res) => {

    console.log(req.query);
    res.status(404).json({error: 404, message: 'not found'});
});

const server = app.listen(config.http.port, () => {
    const address = server.address();
    console.log('Webserver running on', [
        'http://', address.address === '::' ? 'localhost' : address.address, ':',
        address.port
    ].join(''));
});
