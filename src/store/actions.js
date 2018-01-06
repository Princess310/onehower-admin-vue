import user from '@/api/user';
import * as types from './mutations-types';

const actions = {
  toggleDrawer(context, openDrawer) {
    context.commit(types.TOOGLE_APP_DRAWER, { openDrawer });
  },
  async login(context, { username = '', password = '' }) {
    const userInfo = await user.login(username, password);
    context.commit(types.USER_LOGIN, userInfo);
  },
};

export default actions;
