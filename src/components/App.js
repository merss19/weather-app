import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import MainContainer from '../containers/MainContainer';

export default function App(props) {
    return (
      <div>
        <h1>Погодное одностраничное веб-приложение..</h1>
          <SearchBox/>
          <MainContainer/>
      </div>
    )
}


