var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86800d5d9470c787b228a0bb75b61bf1&units=metric';

module.exports = { //returns an object
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //`` injects variables into the string using ${} syntax - everything inside {} is executed as JS expression

    return axios.get(requestUrl).then(function (res) {
      // debugger; //pauses application allowing you to explore state at the time
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message); //if this fires, an error has occured
      }else{
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
