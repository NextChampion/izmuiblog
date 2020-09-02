/*
 * @Author: zhangcx01
 * @Date: 2020-08-02 00:01:27
 * @LastEditTime: 2020-08-02 00:02:21
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import Axios from 'axios';

const axios = {
  get: async (url) => {
    let res = null;
    try {
      res = await Axios.get(url);
      const { status, data } = res || {};
      if (status === 200) {
        return { success: true, data };
      }
    } catch (error) {
      return { success: false, error };
    }
    return { success: false, error: '网络请求工具出错' };
  },
  post: async (url, params) => {
    let res = null;
    try {
      res = await Axios.post(url, params);
      const { status, data } = res || {};
      if (status === 200) {
        return { success: true, data };
      }
    } catch (error) {
      return { success: false, error };
    }
    return { success: false, error: '网络请求工具出错' };
  }
};

export default axios;
