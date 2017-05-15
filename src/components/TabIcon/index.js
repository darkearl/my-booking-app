import React, { Component, PropTypes } from 'react';
import { View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Metrics } from '../../assets/themes';
import Styles from './styles';
class TabIcon extends Component {
  render() {
    let {selected, tabIcon} = this.props
    return (
      <View style={[Styles.container,selected ? {backgroundColor:Colors.iconSelectedBackgroundColor}: null]}>
        <Icon
          name={tabIcon }
          size={Metrics.icons.medium}
          color={ Colors.iconColor }
          style={Styles.icon}
        />
      </View>
    );
  }
}

TabIcon.propTypes = {
  tabIcon:PropTypes.string.isRequired
}
export default TabIcon