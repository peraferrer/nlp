/**
 * Created by german.peraferrer on 8/14/2015.
 */

var natural = require('natural'),
    classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
    console.log(classifier.classify('mierda de color negro'));
});