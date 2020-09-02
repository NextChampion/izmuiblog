import {forIn} from 'lodash';

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

export const AppKey = '3225938825';
export const redirect_uri = 'http://www.izmuz.com/'; //授权回调页
export const client_secret = '08cb51714ac3989623ef8e15c34a8d09'; //App Secret

// 用户相关
export const user_url = {
  register: `${BASEURL}/register`,
  userInfo: 'https://api.weibo.com/2/users/show.json',
  auth: 'https://api.weibo.com/oauth2/authorize',
  authUrl: 'https://api.weibo.com/oauth2/access_token',
  login: `https://api.weibo.com/oauth2/access_token?client_id=${AppKey}&client_secret=${client_secret}&grant_type=authorization_code&redirect_uri=${redirect_uri}`,
};

// 审批相关
export const Approve = {};

export function getGetUrl(base, params) {
  if (!params) {
    return base;
  }
  let innerUrl = base + '?';
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const element = params[key];
      const query = `${key}=${element}&`;
      innerUrl += query;
    }
  }
  return innerUrl;
}
