import React, { Component } from 'react';
import { connect } from 'react-redux';


import SearchBox  from './SearchBox';
import MainContainer from './MainContainer';
import {  Grid } from 'react-bootstrap';

export default function addCity(props) {
    return (
        <Grid>
            <h2>Погодное одностраничное веб-приложение..</h2>
            <SearchBox/>
            <MainContainer/>
        </Grid>
    )
}

