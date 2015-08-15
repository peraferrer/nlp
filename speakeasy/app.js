/**
 * Created by german.peraferrer on 8/14/2015.
 */

var speak = require("speakeasy-nlp");

// Analyze sentences at a basic level
// ------------------------------------- //
console.log(speak.classify("What is your name?"));             //=> { action: "what", owner: "listener", subject: "name" }
console.log(speak.classify("Do you know what time it is?"));   //=> { action: "what", owner: "it", subject: "time" }

// Sentiment analysis
// ------------------------------------- //
console.log(speak.sentiment.negativity("I hate your guts"));   //=> { score: 1, words: [hate] }
console.log(speak.sentiment.positivity("I love you"));         //=> { score: 1, words: [love] }

console.log(speak.sentiment.analyze("I love you, but you smell something aweful"));
console.log(speak.sentiment.analyze("K are bastards who steal everything"));
// (Negative scores dictate a stronger influence of negative words)
//=> { score: -1, positive: { ... }, negative: { ... } }

// Closest word
// ------------------------------------- //
console.log(speak.closest("node", ["foo", "nodejs", "baz"]));     //=> "nodejs"