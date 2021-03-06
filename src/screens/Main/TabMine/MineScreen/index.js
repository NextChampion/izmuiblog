/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:47:28
 * @LastEditTime: 2020-08-01 21:48:10
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/TabMine/MineScreen/index.js
 */
import React, { PureComponent } from 'react';
import {
  Alert, StyleSheet, ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { PlaceHolder } from '../../../../components';

import connect from '../../../../redux/connect';
import UI from '../../../../UI';
import UserInfo from './components/UserInfo';
import izmuz from '../../../../izmuz';
import DashBoard from './components/DashBoard';

@connect(['mine'])
export default class MineScreen extends PureComponent {
  static whyDidYouRender = true;

  componentDidMount() {
    this.getUserInfo();
  }

  componentWillUnmount() {}

  getUserInfo = async () => {
    const { mine } = this.props;
    // 如果有信息,暂时不获取
    if (mine.size) {
      return;
    }
    const result = await izmuz.mine.getUserInfo();
    const { success, data, error } = result || {};
    if (!success) {
      Alert('Error', error);
      return;
    }
    izmuz.mine.saveMineInfo(data);
  };

  increase = () => {
    const { num } = this.state;
    this.setState({ num: num + 1 });
  };

  onMineInfoPress = (type) => {
    if (type === 'userInfo') {
      const { navigation } = this.props;
      navigation.navigate('MineBlog');
    }
  }

  render() {
    const { mine } = this.props;
    if (!mine.size) {
      return <PlaceHolder />;
    }
    return (
      <ScrollView style={styles.container}>
        <UserInfo style={styles.userInfo} userInfo={mine} onPress={this.onMineInfoPress} />
        <DashBoard />
      </ScrollView>
    );
  }
}

MineScreen.propTypes = {
  mine: PropTypes.shape({
    size: PropTypes.number,
    get: PropTypes.func
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

MineScreen.defaultProps = {
  mine: {
    size: 0,
    get: () => {}
  },
  navigation: {
    navigate: () => {}
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UI.color.background,
  },
  userInfo: {
    marginVertical: 10,
  },
});
