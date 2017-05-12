import React, {Component, PropTypes} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUserByToken } from '../../actions/Auth/login';
import { Images } from '../../assets/themes';
import Loading from '../../components/Loading';
import styles from './styles';

class LaunchScreen extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(loginUserByToken())
      .then(()=>Actions.main())
      .catch(()=>Actions.login())
  }
  render() {
    const {loginReducer} = this.props
    return (
      <View style={styles.mainContainer}>
        <Loading visible={loginReducer.isFetching}/>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={{flex:1,justifyContent:'center'}}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginReducer : state.login
  }
}

export default connect(mapStateToProps)(LaunchScreen);