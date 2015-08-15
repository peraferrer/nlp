/**
 * Created by german.peraferrer on 8/14/2015.
 */

var natural = require('natural'),
    wordnet = new natural.WordNet();

wordnet.lookup('entity', function(results) {
    wordnet.getSynonyms(results[0], function(results) {
        results.forEach(function(result) {
            console.log('------------------------------------');
            console.log(result.synsetOffset);
            console.log(result.pos);
            console.log(result.lemma);
            console.log(result.pos);
            console.log(result.gloss);
        });
    });
});