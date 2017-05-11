import React,{ Component } from 'react';
import {store} from './store';
import { Provider } from 'react-redux';
import './config';
import App from './App';

export default class Root extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}