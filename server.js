var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    axios = require('axios');
    nodemailer = require('nodemailer');

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
        console.log('server.js:shareid=', req.params.shareId);

        handleSayHello();
        

        var url = 'https://query1.finance.yahoo.com/v8/finance/chart/'+req.params.shareId +'.AX?range=1d&includePrePost=false&interval=2m&corsDomain=au.finance.yahoo.com&.tsrc=finance';
        console.log('url', url);

        axios.get(url).then((response) => {
            //todo figure out what the exact property value is for the share
            var result = response.data.chart.result["0"].indicators.quote["0"].close["0"];
            res.json(result)
        });
    });

app.use('/api', shareRouter);

app.use('/sayHello', shareRouter);
shareRouter.route('/email', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    // Not the movie transporter!
    console.log('server.js: handleSayHello');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hierbier2015@gmail.com', // Your email id
            pass: 'kuthoer2017' // Your password
        }
    });

    var text = 'Hello world from';

    var mailOptions = {
        from: 'hierbier2015@gmail.com', // sender address
        to: 'couwenberg@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: 'fhkshfkhsdkh' //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        console.log('sendMail');
        if(error){
            console.log(error);
            //res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
        };
    });

}





