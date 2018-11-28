import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Apps} from './src/configs/configNavigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/allReducers';
let store=createStore(allReducers)



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Apps/>
      </Provider>

    );
  }
}
