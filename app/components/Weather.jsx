var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;



    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      self.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      // debugger; //pauses application allowing you to explore state at the time
      if(isLoading){ //if isLoading is true
        return (
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        )
      }else if(temp && location){ //if temp and location both exist
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return(
      <div className="container text-center">
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={ this.handleSearch } />
        {renderMessage()} {/* calls the functions allowing components to be conditionally rendered */}
      </div>
    )
  }
});

module.exports = Weather;
