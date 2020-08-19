/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:35:33
 * @LastEditTime: 2020-08-07 00:02:41
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/TabNav/index.js
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Main/TabHome/HomeScreen';
import MineScreen from '../../screens/Main/TabMine/MineScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UI from '../../UI';
import MessageScreen from '../../screens/Main/TabMessage/MessageScreen';
import DiscoveryScreen from '../../screens/Main/TabDiscovery/DiscoveryScreen';
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: UI.color.primary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Train"
        component={MessageScreen}
        options={{
          tabBarLabel: '视频',
          tabBarIcon: ({color, size}) => (
            <Icon name="videocam" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={MessageScreen}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({color, size}) => (
            <Icon name="mail" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
