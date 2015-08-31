/**
 * Created by german.peraferrer on 8/30/2015.
 */

var mongoose = require('mongoose');
var request = require('sync-request');
var cheerio = require('cheerio');
var _ = require('underscore');
var fs = require('fs');
var colors = require('colors');

mongoose.connect('mongodb://localhost:27017/testing');
var db = mongoose.connection;
var Discurso;

db.on('error', console.error.bind(console, 'connection error:'.red));

db.once('open', function() {

    var exit = false;
    var start = 0;
    var articles = [];
    var _article;
    var _discurso;

    Discurso = mongoose.model('discurso', discursoSchema, 'discurso');

    fs.truncateSync('discursos.txt', 0);

    while (!exit) {

        articles = getPage(start);

        if (articles.length > 0) {

            for (var i=0; articles.length > i; i++) {

                console.log('Page: '.yellow + start + ' - Article: '.cyan + i);

                _article = getArticle(articles[i].link);
                _article.startPage = start;
                _article.posicion = i;

                fs.appendFileSync('discursos.txt', JSON.stringify(_article)+', \n');

                /*
                _discurso = new Discurso(getArticle(articles[i].link || ''));

                _discurso.save();
                */
            }

        } else {
            console.log('FINAL !! no hay más discrusos.'.red);
            exit = true;
        }

        start += 40;

    }


});

var getPage = function(start) {
    start = start || 0;
    var url = 'http://www.casarosada.gob.ar/informacion/discursos?start='+start;

    var response = request('GET', url);
    var $ = cheerio.load(response.getBody().toString('utf8'));

    var articles = [];

    $('.category-item-title').toArray().forEach(function(item) {
        articles.push({
            title: $(item).find('a').text().trim(),
            link: 'http://www.casarosada.gob.ar'+$(item).find('a').attr('href')
        });
    });

    return articles;

};

var getArticle = function(url, cb) {
    var response = request('GET', url);
    var $ = cheerio.load(response.getBody().toString('utf8'));

    var article = {
        date: '',
        title: '',
        text:'',
        link: url
    };

    var $article = $('.item-page');

    article.title = $article.find('h2>a').text().trim();
    article.date = $article.find('dl>dd').text().trim();

    $article.find('p').toArray().forEach(function(item) {
        article.text += $(item).text().trim();
    });

    return article;

};

var discursoSchema = mongoose.Schema({}, { strict: false });