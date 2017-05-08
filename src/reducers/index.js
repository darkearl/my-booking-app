import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';
import userReducer from './user';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  form: formReducer
});

export default rootReducer;