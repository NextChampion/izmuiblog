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
  getUserInfo: async (url) => {
    let res = null;
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
