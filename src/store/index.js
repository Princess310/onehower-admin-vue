import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    openDrawer: false,
  },
  mutations,
  actions,
  modules: {
    user,
  },
});

export default store;
