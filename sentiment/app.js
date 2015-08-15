/**
 * Created by german.peraferrer on 8/13/2015.
 */

var sentiment = require('sentiment-spanish');

var dataset = 'La maldita gaseosa, la quiero y me engorda !!! Te amo igual';
var result = sentiment(dataset);
console.dir(result);