import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field,reduxForm } from 'redux-form';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import styles from './styles';
import { Input } from '../Form';
import Loading from '../Loading';

const validate = values => {
  let {email, password} = values
  const errors = {};

  return errors
};

class LoginScene extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    loginReducer: PropTypes.object
  };
  constructor(props){
    super(props)
  }

  render() {
    const { handleRegisterRoute, handleSubmit, loginReducer, pristine, submitting, onSubmit } = this.props;
    const disable = (pristine || submitting);
    return (
      <View style={styles.section}>
        <Loading visible={loginReducer.isFetching}/>
        <View style={styles.containerInput}>
          <Field
            name='email'
            component={Input}
            keyboardType="email-address"
            placeholder="email"
            onSubmitEditing={()=>this.passwordField.focus()}
          />
          <Field
            name='password'
            component={Input}
            secureTextEntry
            placeholder="password"
            refName={(c)=>this.passwordField = c}
            last
          />
        </View>
        <TouchableOpacity style={disable ? styles.buttonDisabled : styles.button} onPress={handleSubmit(onSubmit)} disabled={disable} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableHighlight onPress={()=>handleRegisterRoute()} underlayColor='transparent'>
          <Text style={styles.text}>Dont have an account? Register</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginScene);