import request from './request';

export default {
  async getUserList({ name = '' }) {
    const res = await request.get(`/user/getList?name=${name}`);
    const { data } = res;

    return data.list;
  },

  async login(username = '', password = '') {
    const res = await request.post('user/login', {
      username,
      password,
    });

    const { data: { access_token: Token, user } } = res;

    // store the token
    localStorage.setItem('access_token', Token);

    return user;
  },
};
