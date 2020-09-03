import { dispatch, store, } from '../../redux';

import { getGetUrl, CommonUrl, } from '../../server/lib/base';
import axios from '../../server';

const common = {
  getEmotions: () => {
    const { profile } = store.getState();
    const accessToken = profile.get('access_token');
    const url = getGetUrl(CommonUrl.emotions, {
      access_token: accessToken,
    });
    return axios.get(url);
  },
  saveEmotions: (emotions) => {
    dispatch('SAVE_EMOTIONS', emotions);
  },
  getEmojiUrl: (name) => {
    const { common: commonData } = store.getState();
    const emotions = commonData.get('emotions');
    if (!emotions) {
      return null;
    }
    const emoji = emotions.find((item) => item.phrase === name);
    return emoji;
  }

};
export default common;
