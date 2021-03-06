/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:46:40
 * @LastEditTime: 2020-08-06 23:32:24
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/index.js
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import StackNav from './StackNav/index';
import connect from '../redux/connect';
import AuthNav from './AuthNav';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

@connect(['profile'])
export default class Navigator extends Component {
  render() {
    const { profile } = this.props;
    const accessToken = profile.get('access_token');
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            animationEnabled: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          {!accessToken ? (
            <Stack.Screen name="Auth" component={AuthNav} />
          ) : (
            <Stack.Screen name="Main" component={StackNav} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

Navigator.propTypes = {
  profile: PropTypes.shape({
    size: PropTypes.number,
    get: PropTypes.func
  })
};

Navigator.defaultProps = {
  profile: {
    size: 0,
    get: () => {}
  }
};
