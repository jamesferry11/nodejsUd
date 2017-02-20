const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/a3d19b9315b4045166733dd021f43ea/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature);
        } else {
            console.log('Unable to fetch weather.');
        }
        console.log(body.currently.temperature);
    });
};

module.exports.getWeather = getWeather;