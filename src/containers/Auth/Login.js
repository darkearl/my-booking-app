import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { focus } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { login } from '../../actions/Auth/login';
import LoginScene from './../../components/Auth/LoginScene';
import { View, Image } from 'react-native';
import {Images} from '../../assets/themes';
import styles from './styles';

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
      <View style={styles.mainContainer}>
          <Image source={Images.background} style={styles.backgroundImage}/>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={Images.logo}/>
            </View>
              <LoginScene
                loginReducer={this.props.loginReducer}
                onSubmit={this.handleOnSubmit}
                focusField={this.props.focusField}
              />

          </View>
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