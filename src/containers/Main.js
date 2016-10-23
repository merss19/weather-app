import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityBox from '../components/CityBox';
import { deleteCity } from '../actions'
import { Link } from 'react-router'
import SearchBox  from './SearchBox';
import MainContainer from './MainContainer';
import {  Grid ,Col, Row} from 'react-bootstrap';

export default function Main(props) {
    return (
        <Grid>
            <h2>Погодное одностраничное веб-приложение..</h2>
            <SearchBox/>
            <MainContainer/>
        </Grid>
    )
}

