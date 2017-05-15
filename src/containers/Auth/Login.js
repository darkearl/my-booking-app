import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { focus } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { login } from '../../actions/Auth/login';
import LoginScene from './../../components/Auth/LoginScene';
import { View, Image, ScrollView, Linking } from 'react-native';
import {Images,Metrics} from '../../assets/themes';
import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  };
  handleRegisterRoute(){
    // Actions.register();
    Linking.openURL('http://member.release.kyotokimono-rental.com/Register').catch(err => console.error('An error occurred', err));
  }
  handleOnSubmit(values){
    let {email, password} = values;
    this.props.dispatch(login(email,password))
      .then(()=>{Actions.main()});
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Images.logo}/>
          </View>
          <LoginScene
            loginReducer={this.props.loginReducer}
            onSubmit={this.handleOnSubmit}
            focusField={this.props.focusField}
            handleRegisterRoute={this.handleRegisterRoute}
          />
        </ScrollView>
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    loginReducer : state.login
  }
}

function mapDispatchToProps(dispatch){
  return{
    focusField : (form,field) => dispatch(focus(form,field))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);