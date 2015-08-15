/**
 * Created by german.peraferrer on 8/14/2015.
 */

var natural = require('natural'),
    classifier = new natural.BayesClassifier();

classifier.addDocument(['amor', 'corazon'], 'romantico');
classifier.addDocument(['puto', 'boludo'], 'grosero');
classifier.addDocument(['puto', 'amor'], 'romantico grosero');
classifier.addDocument(['matar', 'mierda'], 'misojeno');
classifier.addDocument(['negro', 'color'], 'color');
classifier.addDocument(['negro', 'mierda'], 'insulto');

classifier.train();

classifier.save('classifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
    console.log(classifier.classify('negro de mierda'));
});