/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:52:45
 * @LastEditTime: 2020-08-04 17:07:55
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/SplashScreen/index.js
 */
import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import Splash from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import connect from '../../redux/connect';

connect(['profile']);
export default class SplashScreen extends PureComponent {
  componentDidMount() {
    Splash.hide();
  }

  goToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  onBtnClick = () => {
    this.goToHome();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> SplashScreen </Text>
        <Button title="进入首页" onPress={this.onBtnClick} />
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

SplashScreen.defaultProps = {
  navigation: {
    navigate: () => {}
  }
};
