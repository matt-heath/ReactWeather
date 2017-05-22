var React = require('react');

var About = (props) => { //stateless functional component for any component that doesn't maintain a state i.e only returns
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>
          This is a weather application built using React and OpenWeatherMap. I have built this following the complete React Web app Developer Course.
        </p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">OpenWeatherMap</a> - I used the OpenWeatherMap API to search for weather data by city name.
          </li>
        </ul>
      </div>
    )
};

module.exports = About;
