import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { login } from '../../actions/Auth/login';
import LoginScene from './../../components/Auth/LoginScene';
import {Container} from 'native-base';
import { View, StyleSheet, Image } from 'react-native';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  };
  handleOnSubmit(values){
    let {email, password} = values;
    this.props.dispatch(login(email,password))
      .then(()=>{Actions.main()});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/image/Octocat.png')}/>
        </View>
          <LoginScene
            loginReducer={this.props.loginReducer}
            onSubmit={this.handleOnSubmit}
          />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginReducer : state.login
  }
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow:1,
    justifyContent: 'center'
  },
  logo: {
    width:100,
    height:100
  }
})