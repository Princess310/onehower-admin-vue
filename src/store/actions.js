import * as types from './mutations-types';

const actions = {
  toggleDrawer(context, openDrawer) {
    context.commit(types.TOOGLE_APP_DRAWER, { openDrawer });
  },
};

export default actions;
