var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

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

    function renderError () {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return(
      <div className="container text-center">
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={ this.handleSearch } />
        {renderMessage()} {/* calls the functions allowing components to be conditionally rendered */}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
