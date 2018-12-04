import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Apps} from './src/configs/configNavigation';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/allReducers';
import rootSaga from './src/sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
let store=createStore(allReducers,{},applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
