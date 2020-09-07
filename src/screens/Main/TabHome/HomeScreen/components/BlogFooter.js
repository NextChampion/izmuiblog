import React, { PureComponent } from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Images from '../../../../../images';
import UI from '../../../../../UI';

export default class BlogFooter extends PureComponent {
  render() {
    const { data } = this.props;
    const {
      reposts_count: resposteCount,
      comments_count: commentCount,
      attitudes_count: attitudesCount
    } = data || {};
    return (
      <View style={styles.container}>
        <Item type="share" count={resposteCount} />
        <Item type="message" count={commentCount} />
        <Item type="zan" count={attitudesCount} />
      </View>
    );
  }
}

BlogFooter.propTypes = {
  data: PropTypes.shape({}),
};

BlogFooter.defaultProps = {
  data: {},
};

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
      <Text style={styles.count}>{count}</Text>
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
    width: 13,
    height: 13,
    marginRight: 10,
  },
  count: {
    fontSize: UI.fontSize.small,
    color: UI.color.black
  }
});
