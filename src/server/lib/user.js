/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:52:21
 * @LastEditTime: 2020-08-02 00:04:47
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

import axios from './axios';
import {user_url, AppKey} from './base';
import {dispatch} from '../../redux';

const user = {
  login: () => {
    return axios.post(user_url.auth, {client_id: AppKey});
  },
  save: (userInfo) => {
    dispatch('UPDATE_USERINFO', userInfo);
  },
  register: () => {},
};
export default user;
