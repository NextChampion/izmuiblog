/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:53:09
 * @LastEditTime: 2020-08-02 00:03:35
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
const dev_url = '';
const prod_url = '';
const env = 'dev';
// const env = 'prod'
const BASEURL = env === 'dev' ? dev_url : prod_url;

// 用户相关
export const user_url = {
  login: `${BASEURL}/login`,
  register: `${BASEURL}/register`,
  userIndo: `${BASEURL}/info`,
  auth: 'https://api.weibo.com/oauth2/authorize',
};

export const AppKey = '3225938825';
export const redirect_uri = 'http://www.izmuz.com/'; //授权回调页
export const client_secret = '08cb51714ac3989623ef8e15c34a8d09'; //App Secret

// 审批相关
export const Approve = {};
