import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

export default class UserInfo extends PureComponent {
  static whyDidYouRender = true;
  render() {
    const {userInfo} = this.props;
    return (
      <View>
        <Text>昵称: {userInfo.nickname}</Text>
        <Text> 年龄:{userInfo.age} </Text>
      </View>
    );
  }
}
