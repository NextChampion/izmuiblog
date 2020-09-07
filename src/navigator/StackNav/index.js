/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:47:11
 * @LastEditTime: 2020-08-06 23:31:33
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/StackNav/index.js
 */

import React, { memo } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import TabNav from '../TabNav';
import SettingScreen from '../../screens/Main/TabMine/SettingScreen';
import MineBlogScreen from '../../screens/Main/TabMine/MineBlogScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={TabNav} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="MineBlog" component={MineBlogScreen} />
    </Stack.Navigator>
  );
}

export default memo(StackNav);
