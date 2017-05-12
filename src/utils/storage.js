import React from 'react';
import { AsyncStorage } from 'react-native';
import AppConfig from '../config/AppConfig';

export const setUserToken = (token) => {
  forgetItem(AppConfig.API_TOKEN);
  AsyncStorage.setItem(AppConfig.API_TOKEN, token, (err)=> {
    if (err) {
      throw err;
    }
  });
};

export const  getUserToken =  () => {
  return AsyncStorage.getItem(AppConfig.API_TOKEN);
};

export const forgetItem = (key)=> {
  AsyncStorage.removeItem(key);
};