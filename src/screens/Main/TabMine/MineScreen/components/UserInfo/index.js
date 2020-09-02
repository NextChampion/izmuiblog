import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class UserInfo extends PureComponent {
  static whyDidYouRender = true;
  render() {
    const {userInfo} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image
            style={styles.avatar}
            source={{uri: userInfo.get('avatar_large')}}
          />
          <View>
            <Text>{userInfo.get('screen_name')}</Text>
            <Text>{userInfo.get('description')}</Text>
          </View>
        </View>
        <View>
          <Item title="微博" num={userInfo.get('statuses_count')} />
          <Item title="关注" num={userInfo.get('friends_count')} />
          <Item title="粉丝" num={userInfo.get('followers_count')} />
        </View>
        <Text>昵称: {userInfo && userInfo.nickname}</Text>
        <Text> 年龄:{userInfo && userInfo.age} </Text>
      </View>
    );
  }
}

function Item(props) {
  const {title, num} = props || {};
  return (
    <View>
      <Text>{num}</Text>
      <Text>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  topView: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
