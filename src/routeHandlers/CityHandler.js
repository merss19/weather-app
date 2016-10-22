import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityDetail from '../containers/CityDetail';

console.log('City')

export default class CityHandler extends Component {


  render() {

    console.log('params')
    console.log(this.props.params.id)

    return (
      <div>
        <CityDetail  id ={ this.props.params.id } />
      </div>
    );
  }
}


