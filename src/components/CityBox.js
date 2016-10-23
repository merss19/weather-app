import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions'
import { FormControl,Button, Grid ,Col, Row, Panel } from 'react-bootstrap';
import { Link } from 'react-router'

 class  CityBox extends Component {

    render(){
        const { cityObj, deleteCity, loadCity } = this.props
        const data = cityObj.data
        const img = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        const temp = Math.round(data.main.temp -272.15) + ' C'
        console.log('cityBox')
        console.log(cityObj)
        return (

                <Panel className="city-box__item">
                    <h3>{data.name}</h3>
                    <img src={img} alt=""/>
                    <Panel >{ temp }</Panel>

                    <Row className="show-grid">
                        <Col xs={6}>
                            <Button
                                onClick = {this.handleDelete.bind(this)}
                                bsStyle="danger"
                                className="city-box__btn"
                                type="submit"
                            >Delete
                            </Button>
                        </Col>

                        <Col xs={6}>
                            <Link to ={`/cities/${data.id}`}>
                                <Button
                                    bsStyle="success"
                                    className="city-box__btn"
                                    type="submit"
                                >More
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Panel>

        )
    }

     handleDelete(e){

         const { cityObj, deleteCity } = this.props
         deleteCity(cityObj.id)
     }



}

export default connect(null, {deleteCity})(CityBox)


