import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

// Styles
import styles from './styles'

class PushMessageScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>PushMessageScreen Screen</Text>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PushMessageScreen)