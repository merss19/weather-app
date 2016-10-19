import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import ResultContainer from '../containers/ResultContainer';

export default function App(props) {
    return (
      <div>
        <h1>Погодное одностраничное веб-приложение..</h1>
          <SearchBox/>
          <ResultContainer/>
      </div>
    )
}


