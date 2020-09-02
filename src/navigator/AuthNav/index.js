/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:47:11
 * @LastEditTime: 2020-08-06 23:34:18
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/StackNav/index.js
 */

import React, { memo } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import AuthScreen from '../../screens/Auth/AuthScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import ForgetPasswordScreen from '../../screens/Auth/ForgetPasswordScreen';

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default memo(AuthNav);
