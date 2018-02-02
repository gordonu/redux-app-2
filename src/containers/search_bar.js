import React, { Component } from 'react';
//Redux setup
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    //this refers to SearchBar
                          //1. take this instance of onInputChange, 2. bind it to this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //3. replace onInputChange with this bound instance of this function. 
  }

  onInputChange(event) {
    // console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  //We need to fetch weather data

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
      {/* When pressing enter on a form element the browser thinks your wanting to submit contents of form */}
        <input 
        placeholder="Get a five-day forcast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);