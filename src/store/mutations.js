import * as types from './mutations-types';

const mutations = {
  [types.TOOGLE_APP_DRAWER](state, { openDrawer }) {
    state.openDrawer = openDrawer;
  },
  [types.USER_LOGIN](state, userInfo = {}) {
    state.currentUser = userInfo;
  },
};

export default mutations;
