/**
 * Created by german.peraferrer on 8/10/2015.
 */

var colors = require('colors');
var natural = require('natural');
var stemmer = natural.PorterStemmer; // Existe PorterStemmerEs y PorterStemmerRu

// Lancaster es otro algoritmo para hacer Stem
//var stemmer = natural.LancasterStemmer;

// Agrega el metodo stem a un String
stemmer.attach();

console.log('--- STEM ---'.green);
console.log('stems'.stem());
console.log('stemming'.stem());
console.log('stemmed'.stem());
console.log('stem'.stem());

console.log('--- TOKENIZE STEM ---'.green);
// Podemos realizar la división sobre un documento completo, si fuese necesario
console.log('stems returned'.tokenizeAndStem());

// Por defecto, se omiten algunas palabras que se consideran irrelevantes
console.log('i stemmed words.'.tokenizeAndStem());

// Para evitar que se omitan palabras, colotar como parametro TRUE
console.log('i stemmed words.'.tokenizeAndStem(true));