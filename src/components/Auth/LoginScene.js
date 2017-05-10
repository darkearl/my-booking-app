import React, {Component, PropTypes} from 'react';
import { Field,reduxForm } from 'redux-form';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Colors } from '../../assets/themes'
import FormInput from '../FormInput';
import Loading from '../Loading';
const elements = {
  email: {lbl: 'lbl_email', name: 'email', id: 'emailId'},
  password: {lbl: 'lbl_password', name: 'password', id: 'passwordId'},
};

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
  onSubmitEdit = () => {
    // whatever you want to do on submit
    this.props.focusField('loginForm',elements.password.name)
  }

  render() {
    const { handleSubmit,loginReducer,pristine, submitting } = this.props;
    let disableButton = pristine || submitting
    return (
      <View style={styles.section}>
        <Loading visible={loginReducer.isFetching}/>
        <View style={styles.containerInput}>
          <Field
            name={elements.email.name}
            component={FormInput}
            keyboardType="email-address"
            placeholder="email"
            returnKeyType="next"
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={()=>this.passwordField.focus()}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeholderTextColor}
            style={styles.textInput}
          />
          <Field
            name={elements.password.name}
            component={FormInput}
            secureTextEntry
            placeholder="password"
            returnKeyType="go"
            refName={(c)=>this.passwordField = c}
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeholderTextColor}
            style={styles.textInput}
            last
          />
        </View>
        <TouchableOpacity style={disableButton ? styles.buttonDisabled : styles.button} onPress={handleSubmit(this.props.onSubmit)} disabled={disableButton} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginScene);