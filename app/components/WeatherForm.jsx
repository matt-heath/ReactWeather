var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); //prevents page reload

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Enter City Name" ref="location" />
        <br />
        <button className="btn btn-lg btn-primary" type="submit">Get Weather</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
