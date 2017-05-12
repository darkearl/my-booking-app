import {fetchData} from '../api';
import { API_TOKEN } from '../../constants/config'
import { getUserToken, setUserToken, forgetItem } from '../../utils/storage';
import {POST, GET} from '../../constants/FetchTypes';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  GET_PROFILE_USER
} from '../../constants/ActionTypes';

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailure(message) {
  forgetItem(API_TOKEN);
  return {
    type: LOGIN_FAILURE,
    payload: message
  };
}

export function login(email, password, remember = false) {
  return dispatch => {
    dispatch(loginRequest());
    return fetchData(POST, 'login', {data: {email, password, remember}})
      .then(response => {
        let {data: {Token}} = response;
        setUserToken(Token);
        return dispatch(getProfile())
          .then(() => dispatch(loginSuccess()))
      })
      .catch(error => {
        dispatch(loginFailure(error));
        throw error;
      });
  }
}

export function loginUserByToken() {
  return (dispatch) => {
    return getUserToken()
      .then((token) => {
        if(token) {
          dispatch(loginRequest());
          return dispatch(getProfile())
            .then(() => dispatch(loginSuccess()))
            .catch((error) => {
              dispatch(loginFailure(error));
              throw error;
            })
        }else{
          throw('no token');
        }
      })
  }
}

export function logoutUser() {
  forgetItem(API_TOKEN);
  return (dispatch) => {
    return fetchData(GET, 'logout')
      .then(() =>dispatch({type: LOGOUT_USER}))
  }
}
function getProfile ()  {
  return (dispatch) => {
    return fetchData(GET, 'getProfile')
      .then(
        response => dispatch({
          type: GET_PROFILE_USER,
          payload: response.data.memberDetail
        })
      )
      .catch(error => {
        throw error;
      });
  }
}