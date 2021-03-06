const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather.weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude,(errMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
            }
        });
    }
});

/*//0a3d19b9315b4045166733dd021f43ea

https://api.forecast.io/forecast/a3d19b9315b4045166733dd021f43ea/lat/long */

// const request = require('request');
//
// request({
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body, undefined, 2));
// });
