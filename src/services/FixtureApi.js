

const getfile = (key) => {
  switch(key) {
    case 'login':
      return require('../fixtures/login.json');
      break;
    default:
      console.log('fixtures ' + key +' not found');
  }
}
export const fetchJson = (url, options = {}) => {
  let dumpData = getfile(url);
  let { status, statusText, data } = dumpData;
  if (status < 200 || status >= 300) {
    return Promise.reject(new MyError((data && data._error) || statusText ,data,status));
  }
  return Promise.resolve({ status, headers, body, data });
};


function MyError(message, data=null, status=null) {
  this.name = 'SweError';
  this.status = status
  this.message = message;
  this.data = data;
  this.stack = (new Error()).stack;
}