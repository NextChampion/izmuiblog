/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:52:21
 * @LastEditTime: 2020-08-02 00:04:47
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

import axios from './axios';
import { UserUrl, AppKey, getGetUrl } from './base';
import { dispatch, store } from '../../redux';

const user = {
  login: () => axios.post(UserUrl.auth, { client_id: AppKey }),
  save: (userInfo) => {
    dispatch('UPDATE_USERINFO', userInfo);
  },
  saveMineInfo: (mineInfo) => {
    dispatch('UPDATE_MINE', mineInfo);
  },
  auth: async (authUrl) => {
    let res = null;
    try {
      res = await axios.post(authUrl);
      const { status, data } = res || {};
      if (status === 200) {
        return { success: true, data };
      }
    } catch (error) {
      return { success: false, error };
    }
    return { success: false, };
  },
  register: () => {},
  getUserInfo: async () => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const uid = profile.get('uid');
    let res = null;
    const url = getGetUrl(UserUrl.userInfo, { access_token: accessToken, uid });
    try {
      res = await axios.get(url);
      const { status, data } = res || {};
      if (status === 200) {
        return { success: true, data };
      }
    } catch (error) {
      return { success: false, error };
    }
    return { success: false };
  },
};
export default user;
