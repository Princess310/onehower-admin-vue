import axios from 'axios';
import querystring from 'querystring';

const request = axios.create({
  baseURL: 'https://api.onehower.com/',
  transformRequest(data) {
    return querystring.stringify(data);
  },
  transformResponse(data) {
    const jsonObj = JSON.parse(data);
    const { code, result } = jsonObj;

    if (code === 200) {
      return result;
    }

    throw Error(result.message);
  },
});
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default request;
