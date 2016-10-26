import React from 'react';



import SearchBox  from './SearchBox';
import MainContainer from './MainContainer';
import {  Grid } from 'react-bootstrap';

export default function addCity(props) {
    return (
        <Grid>
            <h2>Weather App</h2>
            <SearchBox/>
            <MainContainer/>
        </Grid>
    )
}

