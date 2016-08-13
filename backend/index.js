const express = require('express'),
    pmongo = require('promised-mongo'),
    //bodyParser = require('body-parser'),
    config = require('./config');

const app = express();


const mdb = pmongo(config.mongodb.database);

app.get('/api/posts', (req, res) => {
    //const posts = [
    //    {
    //        url: 'http://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/siamese-cat-corey-ford.jpg',
    //        title: 'Cats'
    //    }
    //];

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
