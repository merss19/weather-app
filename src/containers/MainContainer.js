import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityBox from '../components/CityBox';
import { deleteCity } from '../actions'
//import { searchCity, addCities, getLocation } from '../actions';
//import Search from '../components/Search';
//import SearchedCity from '../components/SearchedCity';

class MainContainer extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        const { cities } = this.props
        const list = cities.map((city) =>
            <li key={city.id}>
                <CityBox cityObj = {city} />
            </li>)

        return (
            <div>
                <h1>Список городов</h1>
                <ul>
                    { list }
                </ul>
            </div>
        )
    }



}

export default connect((state) =>{
      const { cities } = state
      return { cities}
    },  { deleteCity }
)(MainContainer)



