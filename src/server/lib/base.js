/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:53:09
 * @LastEditTime: 2020-08-02 00:03:35
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
const devUrl = '';
const prodUrl = '';
const env = 'dev';
// const env = 'prod'
const BASEURL = env === 'dev' ? devUrl : prodUrl;

export const AppKey = '3225938825';
export const redirectUri = 'http://www.izmuz.com/'; // 授权回调页
export const clientSecret = '08cb51714ac3989623ef8e15c34a8d09'; // App Secret

// 用户相关
export const UserUrl = {
  register: `${BASEURL}/register`,
  userInfo: 'https://api.weibo.com/2/users/show.json',
  auth: 'https://api.weibo.com/oauth2/authorize',
  authUrl: 'https://api.weibo.com/oauth2/access_token',
  login: `https://api.weibo.com/oauth2/access_token?client_id=${AppKey}&client_secret=${clientSecret}&grant_type=authorization_code&redirect_uri=${redirectUri}`,
};

export const BlogUrl = {
  followList: 'https://api.weibo.com/2/statuses/home_timeline.json',
  getUserBlog: 'https://api.weibo.com/2/statuses/user_timeline.json'
};

export const CommonUrl = {
  emotions: 'https://api.weibo.com/2/emotions.json',
};

export function getGetUrl(base, params) {
  if (!params) {
    return base;
  }
  let innerUrl = `${base}?`;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(key)) {
      const element = params[key];
      const query = `${key}=${element}&`;
      innerUrl += query;
    }
  }
  return innerUrl;
}
