/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:52:45
 * @LastEditTime: 2020-08-04 17:07:55
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/SplashScreen/index.js
 */
import React, { PureComponent } from 'react';
import { Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import connect from '../../redux/connect';
import izmuz from '../../izmuz';
import { onLoadRedux } from '../../redux';

@connect(['profile'])
export default class SplashScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.initilize();
  }

  initilize = () => {
    onLoadRedux((store) => {
      const { common, profile } = store;
      const accessToken = profile.get('access_token');
      const emotions = common.get('emotions');
      if (!emotions && accessToken) {
        this.getEmotions();
      }
      this.goToHome();
    });
  }

  getEmotions = async () => {
    const result = await izmuz.common.getEmotions();
    const { success, data, error } = result || {};
    if (!success) {
      Alert.alert('Error', error);
      return;
    }
    izmuz.common.saveEmotions(data);
  }

  goToHome = () => {
    const { navigation, profile, } = this.props;
    const accessToken = profile.get('access_token');
    if (accessToken) {
      navigation.replace('Main');
    } else {
      navigation.replace('Auth');
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> 欢迎使用izmuz微博 </Text>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    replace: PropTypes.func,
  }),
  profile: PropTypes.shape({
    get: PropTypes.func,
  })
};

SplashScreen.defaultProps = {
  navigation: {
    navigate: () => {},
    replace: () => {},
  },
  profile: {
    get: () => {}
  }
};
