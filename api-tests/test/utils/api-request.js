import { baseUrl } from '../../.mocharc';

const axios = require('axios');

class ApiRequest {
  async runApiRequest(method, endpoint) {
    return await axios({
      method,
      url: `${baseUrl}${endpoint}`
    });
  }
}

export default new ApiRequest();
