var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    axios = require('axios');

var db = mongoose.connect('mongodb://localhost/shareAPI');
var Share = require('./models/shareModel');

var app = express();

var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello this is the api');
});

app.listen(port, function () {
    console.log('server currently running on ', port);
});

var shareRouter = express.Router();

shareRouter.route('/shares')
    .post(function (req, res) {
        var share = new Share(req.body);
        console.log(share);
        share.save();
        res.status(201).send(share);
    })
    .get(function (req, res) {
        var query = req.query;
        console.log('shares get');
        Share.find(query, function (err, shares) {
            if (err)
                console.log(err);
            else
                res.json(shares);
        });
    });

shareRouter.route('/shares/:shareId')
    .get(function (req, res) {

        console.log('hello there shareid');

        axios.get('https://quoteapi.com/api/v4/symbols/tls.asx?appID=af5f4d73c1a54a33&averages=1&liveness=delayed').then((response) => {
                res.json(response.data)
            }
        );
        // Share.findById(req.params.shareId, function (err, share) {
        //     if (err)
        //         res.status(500).send(err);
        //     else
        //         res.json(share);
        // });
    });

app.use('/api', shareRouter);