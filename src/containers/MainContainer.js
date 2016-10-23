import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityBox from '../components/CityBox';
import { deleteCity } from '../actions'
import { Link } from 'react-router'
import CityDetail from '../containers/CityDetail';
import { FormControl,Button, Grid ,Col, Row} from 'react-bootstrap';

class MainContainer extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        const { cities } = this.props
        const list = cities.map((city) =>
            <Col xs={3} key={city.data.id} className = "city-box">
                <CityBox cityObj = {city} />
            </Col>)


        return (
            <div>
                <h1>Список городов</h1>
                <div className="city-box__list">
                    { list }
                </div>

            </div>
        )
    }



}

export default connect((state) =>{
      const { cities } = state
    console.log('cities')
    console.log(cities)
    console.log(cities.toJS())
    console.log(JSON.stringify(cities.toJS()))
    localStorage.setItem('cities', JSON.stringify(cities.toJS()));
    console.log(JSON.parse(localStorage.getItem('cities')))
      return { cities}
    },  { deleteCity }
)(MainContainer)



