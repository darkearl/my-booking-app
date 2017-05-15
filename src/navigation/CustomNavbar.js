import React from 'react'
import PropTypes from 'prop-types';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import NavItems from './NavItems'

// Styles
import Styles from './styles'

class CustomNavbar extends React.Component {

  renderLeftButtons () {
    const {showBackButton} = this.props;
    const drawer = this.context.drawer;
    let button = drawer ? NavItems.drawerButton() : null;
    if(showBackButton){
      button = NavItems.backButton();
    }
    return (
      <View style={Styles.leftButtons}>
        {button}
      </View>
    )
  }
  renderMiddle () {
    const { title } = this.props;
    return (
      <View style={Styles.middle}>
        <Text style={Styles.title}>{title}</Text>
      </View>
    )
  }
  renderRightButtons () {
    return (
      <View style={Styles.rightButtons}>

      </View>
    )
  }
  render() {
    return (
      <View style={Styles.container}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

CustomNavbar.contextTypes = {
  drawer: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)