/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:52:21
 * @LastEditTime: 2020-08-02 00:04:47
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

import axios from './axios';
import {user_url, AppKey, getGetUrl} from './base';
import {dispatch, store} from '../../redux';

const user = {
  login: () => {
    return axios.post(user_url.auth, {client_id: AppKey});
  },
  save: (userInfo) => {
    dispatch('UPDATE_USERINFO', userInfo);
  },
  register: () => {},
  getUserInfo: async () => {
    const {profile} = store.getState();
    const access_token = profile.get('access_token');
    const uid = profile.get('uid');
    let res = null;
    const url = getGetUrl(user_url.userInfo, {access_token, uid});
    try {
      res = await axios.get(url);
      const {status, data} = res || {};
      if (status === 200) {
        return {success: true, data};
      }
    } catch (error) {
      return {success: false, error};
    }
  },
};
export default user;
