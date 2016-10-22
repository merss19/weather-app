import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions'

 class  CityBox extends Component {

    render(){
        const { cityObj, deleteCity,loadCity } = this.props
        const data = cityObj.data
        const img = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        console.log('cityBox')
        console.log(cityObj)
        return (
            <div>
                <h2>{data.name}</h2>
                <img src={img} alt=""/>
                <div>{data.main.temp}</div>
                <button onClick = {this.handleDelete.bind(this)}>Удалить</button>

            </div>
        )
    }

     handleDelete(e){

         const { cityObj, deleteCity } = this.props
         deleteCity(cityObj.id)
     }



}

export default connect(null, {deleteCity})(CityBox)


