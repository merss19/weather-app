import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityBox from '../components/CityBox';
import { deleteCity } from '../actions'
import { Link } from 'react-router'
import SearchBox  from './SearchBox';
import MainContainer from './MainContainer';

export default function Main(props) {
    return (
        <div>
            <h1>Погодное одностраничное веб-приложение..</h1>
            <SearchBox/>
            <MainContainer/>
        </div>
    )
}

