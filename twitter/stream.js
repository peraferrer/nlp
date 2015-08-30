/**
 * Created by german.peraferrer on 8/25/2015.
 */

var Twit = require('twit');
var mongoose = require('mongoose');
var sentiment = require('sentiment-spanish');
var colors = require('colors');

var T = new Twit({
    consumer_key: '7LbJaSbtJrtWgW8jUPccg',
    consumer_secret: '4twKUAL1ebFVdFMya4LbES55oQqGXOGT8CMjGV88pmE',
    access_token: '64903749-UNRldyo358593ucHtgRrniJeVlV7ORlSh1YIu5GVu',
    access_token_secret: 'kmsdAvr3l1ez6iaXQ0d3rCOUXOI0CuWYy4shGKbQOW5uf'
});

mongoose.connect('mongodb://localhost:27017/testing');
//mongoose.connect('mongodb://usrtesting:123@ds063630.mongolab.com:63630/testing');
var db = mongoose.connection;
var Tweet;

db.on('error', console.error.bind(console, 'connection error:'.red));

db.once('open', function() {

    Tweet = mongoose.model('tweet', tweetSchema, 'tweet');

    var stream = T.stream('statuses/filter', {
        track: [
            'tucuman',
            'tucumanazo',
            'tucuman represion',
            '#FraudeEnTucuman',
            'Alperovich',

            'inundaciones',
            'inundados',

            'nisman',

            '#pasok',
            '#paso2015',
            '#paso',
            'elecciones2015',
            'voto2015',

            'olanaranja2015',
            'danielscioli',
            '#votok',
            'decada ganada',

            'mauriciomacri',
            'proargentina',
            'macri',
            '#PRO',

            'SergioMassa',
            '#massa'
        ],
        language: 'es'
    });

    stream.on('tweet', function (tweet) {
        var _sentiment = sentiment(tweet.text);
        tweet.sentiment = _sentiment;

        var tw = new Tweet(tweet);

        tw.save(function (err, obj) {
            if (err) {
                return console.error(err);
            }
            console.log(colors.bgYellow.black('%s ') + colors.cyan(' [%s]') + ' - %s', sentimentToSmiley(_sentiment), tweet.user.screen_name, tweet.text);
        });

    });

});

var sentimentToSmiley = function(sentiment) {
    var score = sentiment.score;

    if (score === 0) {
        return ':-|'
    } else if(score < 0) {
        if(score > -2) { return ':-(' }
        return ':`('
    } else if(score < 2) {
        return ':-)'
    } else {
        return ':-D'
    }
};

var tweetSchema = mongoose.Schema({}, { strict: false });