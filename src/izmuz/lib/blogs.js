import { dispatch, store, } from '../../redux';
import server from '../../server';
import { getGetUrl, UserUrl, } from '../../server/lib/base';

const blogs = {

  getUserInfo: () => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const uid = profile.get('uid');
    const url = getGetUrl(UserUrl.userInfo, { access_token: accessToken, uid });
    return server.user.getUserInfo(url);
  },

};
export default blogs;
