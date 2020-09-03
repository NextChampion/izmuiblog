import React, { PureComponent } from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';
import Images from '../../../../../images';
import UI from '../../../../../UI';

export default class BlogFooter extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Item type="share" count={4} />
        <Item type="message" count={4} />
        <Item type="zan" count={4} />
      </View>
    );
  }
}

function Item(props) {
  const { type, count } = props || {};
  function getIcon() {
    if (type === 'share') {
      return Images.blog.share;
    }
    if (type === 'message') {
      return Images.blog.message;
    }
    if (type === 'zan') {
      return Images.blog.dianzan;
    }
    return null;
  }
  return (
    <View style={styles.item}>
      <Image style={styles.icon} source={getIcon()} />
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: UI.color.background,
    marginHorizontal: UI.margin.normal,
  },
  item: {
    flex: 1,
    paddingVertical: UI.padding.tiny,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 20,
    height: 20,
  }
});
