/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:47:28
 * @LastEditTime: 2020-08-01 21:48:10
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/TabMine/MineScreen/index.js
 */
import React, {PureComponent} from 'react';
import {Text, View, Alert} from 'react-native';
import {Header} from '../../../../components';
import UserInfo from './components/UserInfo';
import Num from './components/Num';
import server from '../../../../server';
import connect from '../../../../redux/connect';
import {dispatch} from '../../../../redux';

@connect(['mine'])
export default class MineScreen extends PureComponent {
  static whyDidYouRender = true;
  state = {
    num: 0,
    userInfo: {
      nickname: '张三',
      age: 20,
    },
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentWillUnmount() {}
  getUserInfo = async () => {
    const {mine} = this.props;
    // 如果有信息,暂时不获取
    if (mine.size) {
      return;
    }
    const result = await server.user.getUserInfo();
    const {success, data, error} = result || {};
    if (!success) {
      Alert('Error', error);
      return;
    }
    dispatch('UPDATE_MINE', data);
  };

  increase = () => {
    const {num} = this.state;
    this.setState({num: num + 1});
  };

  render() {
    const {userInfo, num} = this.state;
    return (
      <View>
        <Header />
        <Text> MineScreen </Text>
        <Num num={num} />
        <UserInfo userInfo={userInfo} />
      </View>
    );
  }
}
