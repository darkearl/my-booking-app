import React,{ Component } from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import './config';
import App from './App';

export default class Root extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
  }
}