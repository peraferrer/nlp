/**
 * Created by german.peraferrer on 8/13/2015.
 */

var sentiment = require('sentiment');

var dataset = 'Hey you worthless scumbag';
var result = sentiment(dataset);
console.dir(result);