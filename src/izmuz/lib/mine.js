import { dispatch, store, } from '../../redux';
// import axio from '../../server';
import { getGetUrl, UserUrl, AppKey } from '../../server/lib/base';
import axios from '../../server';

const mine = {
  login: () => axios.post(UserUrl.auth, { client_id: AppKey }),
  auth: (authUrl) => axios.post(authUrl),
  getUserInfo: () => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const uid = profile.get('uid');
    const url = getGetUrl(UserUrl.userInfo, { access_token: accessToken, uid });
    return axios.get(url);
  },
  save: (userInfo) => {
    dispatch('UPDATE_USERINFO', userInfo);
  },
  saveMineInfo: (mineInfo) => {
    dispatch('UPDATE_MINE', mineInfo);
  },
};
export default mine;
