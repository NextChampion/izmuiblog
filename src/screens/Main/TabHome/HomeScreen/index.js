/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:47:17
 * @LastEditTime: 2020-08-01 21:48:00
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/TabHome/HomeScreen/index.js
 */
import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class HomeScreen extends PureComponent {
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Setting');
  };

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
        <Button title="跳转到setting" onPress={this.onPress} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

HomeScreen.defaultProps = {
  navigation: {
    navigate: () => {}
  }
};
