/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:52:21
 * @LastEditTime: 2020-08-02 00:04:47
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

import axios from './axios';

const user = {
  login: (url, params) => axios.post(url, params),
  auth: (authUrl) => axios.post(authUrl),
  getUserInfo: (url) => axios.get(url),
};
export default user;
