import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/Root'

class RNBase extends React.Component {
  render () {
    return <Root {...this.props} />
  }
}

AppRegistry.registerComponent('MyBookingApp', () => RNBase);