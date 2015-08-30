/**
 * Created by german.peraferrer on 8/26/2015.
 */

var sentiment = require('sentiment-spanish');
var mongoose = require('mongoose');
var colors = require('colors');
var _ = require('underscore');

mongoose.connect('mongodb://localhost:27017/testing');
//mongoose.connect('mongodb://usrtesting:123@ds063630.mongolab.com:63630/testing');
var db = mongoose.connection;
var Tweet;

db.on('error', console.error.bind(console, 'connection error:'.red));

db.once('open', function() {

    Tweet = mongoose.model('tweet', tweetSchema, 'tweet');

    setInterval(detectSentiment, 5000);
});

var detectSentiment = function() {

    var collection = db.collection('tweet');

    collection.find({sentiment: {$exists: false}}).limit(100).toArray(function(err, tweets) {
        if (err) {
            return console.error(err);
        }

        _.each(tweets, function (tweet, key) {
            var _sentiment = sentiment(tweet.text);

            console.log(colors.bgYellow.black('%s ')+' [%s] - %s', sentimentToSmiley(_sentiment), tweet.user.screen_name, tweet.text);

            collection.update({_id: tweet._id}, {$set: {sentiment: _sentiment }});

        });

    });
};

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