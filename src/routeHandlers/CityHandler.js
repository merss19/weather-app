import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityDetail from '../containers/CityDetail'



export default class CityHandler extends Component {


    render() {
        return (
          <div className = "city-detail">
              <CityDetail  id ={ this.props.params.id } />
          </div>
        )
    }
}


