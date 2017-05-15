import api from '../services';
import { getUserToken } from '../utils/storage';

export const fetchData =async (type, resource, params) => {
  let token =await getUserToken();
  return api(type, resource, params, token)
};