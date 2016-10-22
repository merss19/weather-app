import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { searchCity, addCities, getLocation } from '../actions';
//import Search from '../components/Search';
//import SearchedCity from '../components/SearchedCity';
console.log('CityDetail')
 class CityDetail extends Component {


  render() {
    const city = this.props.city
      console.log('city-deta')
      console.log(city)
    return (
      <div>
          { city.map((city) =>city.data.name) }
      </div>
    );
  }
}

export default connect((state, { id }) => {
    console.log('id')
    console.log(state)
    console.log(id)
    const city = state.cities.filter(city =>
        city.id == id
    )
    console.log(city)
    return { city }
})(CityDetail)


