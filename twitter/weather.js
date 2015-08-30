/**
 * Created by german.peraferrer on 8/27/2015.
 */

var request = require('request');
var colors = require('colors');

var weather_key = 'e4bbf56160a6ca97';

var weatherServiceURL = function(key, country, state) {
    return 'http://api.wunderground.com/api/'+key+'/conditions/q/'+country+'/'+state+'.json';
};

// Hay que crear un array con todas las provincias y recorrerlo cada 1 hora para actualizar
request(weatherServiceURL(weather_key, 'Argentina', 'Buenos_Aires'), function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body).current_observation);
    }
});