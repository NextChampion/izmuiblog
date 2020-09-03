import { dispatch, store, } from '../../redux';

import { getGetUrl, BlogUrl, } from '../../server/lib/base';
import axios from '../../server';

const blogs = {
  getBlogList: (sinceId, page = 1) => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const uid = profile.get('uid');
    const url = getGetUrl(BlogUrl.followList, {
      access_token: accessToken, uid, count: 10, page, since_id: sinceId
    });
    return axios.get(url);
  },

};
export default blogs;
