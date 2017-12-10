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
        console.log('server.js:.get');
        console.log('server.js:hello there shareid=', req.params.shareId);

      // var url ='https://quoteapi.com/api/v4/symbols/' + req.params.shareId + '.asx?appID=af5f4d73c1a54a33&averages=1&liveness=delayed';

        var url = 'https://query1.finance.yahoo.com/v8/finance/chart/nab.AX?range=1d&includePrePost=false&interval=2m&corsDomain=au.finance.yahoo.com&.tsrc=finance';
        console.log('url', url);

        axios.get(url).then((response) =>
        {
               var result = response.data.chart.result["0"].indicators.quote["0"].close["0"];
                res.json(result)
        });
    });

app.use('/api', shareRouter);