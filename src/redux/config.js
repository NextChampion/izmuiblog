/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 22:19:09
 * @LastEditTime: 2020-08-01 22:44:49
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/redux/config.js
 */
import Immutable from 'immutable';

export const version = {
  default: Immutable.fromJS({}),
  persist: true,
  actions: {
    SET_VERSION: {
      reducer: (state, {payload}) => state.merge(payload),
    },
  },
};

export const profile = {
  default: Immutable.fromJS({
    signup: false,
    access_token: '',
    expires_in: 0,
    isRealName: false,
    remind_in: '',
    uid: '',
  }),
  actions: {
    UPDATE_PROFILE: {
      inputs: ['userId', 'username', 'avatar', 'signup'],
      reducer: (state, {payload}) => {
        if (payload.username) {
        }
        return state.merge(payload);
      },
    },
    UPDATE_USERINFO: {
      inputs: ['uid', 'remind_in', 'expires_in', 'isRealName', 'access_token'],
      reducer: (state, {payload}) => {
        console.log('UPDATE_USERINFO', payload);
        return state.merge(payload);
      },
    },
  },
};

export const uiState = {
  default: Immutable.fromJS({}),
  actions: {},
};
