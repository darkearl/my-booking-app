import React from 'react'
import { TouchableOpacity } from 'react-native'
import Styles from './styles'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../assets/themes'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
              size={Metrics.icons.medium}
              color={Colors.white}
              style={Styles.backIcon}
        />
      </TouchableOpacity>
    )
  },
  drawerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='bars'
              size={Metrics.icons.medium}
              color={Colors.white}
              style={Styles.drawerIcon}
        />
      </TouchableOpacity>
    )
  }

}
