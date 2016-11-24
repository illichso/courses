import axios from 'axios';

class AuthApi {

  static login(username, password) {
    return axios.post('/api/session', {username, password});
  }

  static logout() {
    return axios.delete('/api/session');
  }

  static getSession() {
    return axios.get('/api/session');
  }
}

export default AuthApi;
