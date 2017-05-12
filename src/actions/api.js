import api from '../services';
import { getUserToken } from '../utils/storage';

export const fetchData =async (type, resource, params) => {
  let token =await getUserToken();
  console.log(token);
  return api(type, resource, params, token)
};