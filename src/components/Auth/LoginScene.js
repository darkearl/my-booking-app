import React, {Component, PropTypes} from 'react';
import { Field,reduxForm } from 'redux-form';
import { Content, Button, Text } from 'native-base';
import styles from './styles';
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
  render() {
    const { handleSubmit,loginReducer,pristine, submitting } = this.props;
    return (
      <Content padder>
        <Loading visible={loginReducer.isFetching}/>
        {loginReducer.error && <Text>{loginReducer.error}</Text>}
        <Field name={elements.email.name} icon="mail" component={FormInput} style={styles.input} keyboardType="email-address" />
        <Field name={elements.password.name} icon="unlock" component={FormInput} style={styles.input} secureTextEntry last />
        <Button block primary disabled={pristine || submitting} style={styles.btn} onPress={handleSubmit(this.props.onSubmit)} >
          <Text>Login</Text>
        </Button>
      </Content>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginScene);