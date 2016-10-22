import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import MainContainer from '../containers/Main';
import Main from '../containers/Main';

export default function App(props) {
    return (
      <div>
          {props.children}
      </div>
    )
}


