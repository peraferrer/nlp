/**
 * Created by german.peraferrer on 8/10/2015.
 */

var colors = require('colors');
var natural = require('natural');
var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();

// Creamos un Documento con texto
tfidf.addDocument('i code in c.');
tfidf.addDocument('i code in ruby.');
tfidf.addDocument('i code in ruby and node, but node more often.');
tfidf.addDocument('this document is about natural, written in node');
tfidf.addDocument('i code in fortran.');

console.log('--- NODE in Document ---'.yellow);
tfidf.tfidfs('node', function(i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('--- RUBY in Document ---'.yellow);
tfidf.tfidfs('ruby', function(i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('--- VERIFICAR UNA PALABRA EN UNA LINEA ESPECIFICA ---'.yellow);
console.log('Buscando "node" en linea 0: ', tfidf.tfidf('node', 0));
console.log('Buscando "node" en linea 2: ', tfidf.tfidf('node', 2));

console.log('--- OBTENER UNA LISTA DE LOS TERMINOS DE UNA LINEA ORDENADOS POR IMPORTANCIA ---'.yellow);
tfidf.listTerms(3 /* document index */).forEach(function(item) {
    console.log(item.term + ': ' + item.tfidf);
});