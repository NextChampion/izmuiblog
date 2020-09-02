import { dispatch, store, } from '../../redux';
import server from '../../server';
import { getGetUrl, UserUrl, AppKey } from '../../server/lib/base';

const mine = {
  login: () => server.user.login(UserUrl.auth, { client_id: AppKey }),
  auth: (authUrl) => server.user.auth(authUrl),
  getUserInfo: () => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const uid = profile.get('uid');
    const url = getGetUrl(UserUrl.userInfo, { access_token: accessToken, uid });
    return server.user.getUserInfo(url);
  },
  save: (userInfo) => {
    dispatch('UPDATE_USERINFO', userInfo);
  },
  saveMineInfo: (mineInfo) => {
    dispatch('UPDATE_MINE', mineInfo);
  },
};
export default mine;
