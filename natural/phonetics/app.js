/**
 * Created by german.peraferrer on 8/10/2015.
 */

var colors = require('colors');
var natural = require('natural');
var phonetic = natural.Metaphone;

phonetic.attach();

var wordA = 'phonetics';
var wordB = 'fonetix';

console.log("--- COMPARAMOS LA FONETICA DE '%s' CON '%s' ---".yellow, wordA, wordB);

// Comparamos la fonética de ambas palabras
if (wordA.soundsLike(wordB)) {
    console.log('Ehhh suenan parecido !!'.green);
} else {
    console.log('Ouchhh mmm no suenan igual !!'.red);
}

console.log("--- TOKEN FONETICO DE '%s' ---".yellow, wordA);
console.log(wordA.phonetics());

console.log("--- TOKENS FONETICOS DE UN STRING LARGO ---".yellow);
console.log('phonetics rock'.tokenizeAndPhoneticize());
