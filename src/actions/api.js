import api from '../services';
import { getUserToken } from '../utils/storage';

export const fetchData = (type, resource, params) => {
  return getUserToken()
    .then((token) => {
      return api(type, resource, params, token)
    })
    .catch(()=> {
      return api(type, resource, params)
    })
};