import * as types from './mutations-types';

const mutations = {
  [types.TOOGLE_APP_DRAWER](state, { openDrawer }) {
    state.openDrawer = openDrawer;
  },
};

export default mutations;
