/**
 * Created by german.peraferrer on 8/14/2015.
 */

var request = require('request');
var cheerio = require('cheerio');
var sentiment = require('sentiment');

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

request('https://www.twitter.com/BarackObama', function(err, response) {
    var $ = cheerio.load(response.body);

    $('.tweet-text').toArray().forEach(function(item) {
        var text = $(item).text();
        var results = sentiment(text);
        console.log(sentimentToSmiley(results), '-', text.replace(/\n/g, ' '));
    });
});