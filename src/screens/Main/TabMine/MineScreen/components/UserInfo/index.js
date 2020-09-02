import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import UI from '../../../../../../UI';

export default class UserInfo extends PureComponent {
  static whyDidYouRender = true;

  render() {
    const { userInfo, style } = this.props;
    return (
      <View style={StyleSheet.compose(styles.container, style)}>
        <View style={styles.topView}>
          <Image
            style={styles.avatar}
            source={{ uri: userInfo.get('avatar_large') }}
          />
          <View style={styles.topRightView}>
            <Text style={styles.nickname}>{userInfo.get('screen_name')}</Text>
            <Text style={styles.desc}>{userInfo.get('description')}</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Item title="微博" num={userInfo.get('statuses_count')} />
          <Item title="关注" num={userInfo.get('friends_count')} />
          <Item title="粉丝" num={userInfo.get('followers_count')} />
        </View>
      </View>
    );
  }
}

function Item(props) {
  const { title, num } = props || {};
  return (
    <View style={styles.item}>
      <Text style={styles.num}>{num}</Text>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: UI.color.white,
  },
  topView: {
    paddingHorizontal: UI.margin.container,
    flexDirection: 'row',
    backgroundColor: UI.color.white,
    paddingVertical: UI.margin.normal,
  },
  topRightView: {
    flex: 1,
    marginLeft: UI.margin.normal,
    justifyContent: 'center',
  },
  nickname: {
    fontWeight: UI.fontWeight.bold,
    fontSize: UI.fontSize.big,
    color: UI.color.title,
  },
  desc: {
    color: UI.color.gray,
    fontSize: UI.fontSize.small,
    marginTop: UI.margin.small,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  bottomView: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    paddingVertical: UI.padding.normal,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UI.color.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: UI.color.background,
  },
  num: {
    color: UI.color.title,
    fontWeight: UI.fontWeight.bold,
    fontSize: UI.fontSize.normal,
  },
  itemTitle: {
    fontSize: UI.fontSize.small,
    color: UI.color.gray,
    marginTop: UI.margin.tiny,
  },
});
