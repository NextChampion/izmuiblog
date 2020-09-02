import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../../../../UI';
import Images from '../../../../../../images';

export default class DashBoard extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Item title="我的相册" imageSource={Images.mine.photo} />
          <Item title="赞/收藏" imageSource={Images.mine.zan} />
          <Item title="浏览记录" imageSource={Images.mine.history} />
          <Item title="草稿箱" imageSource={Images.mine.caogao} />
        </View>
        <View style={styles.row}>
          <Item title="我的钱包" imageSource={Images.mine.wallet} />
          <Item title="创作中心" imageSource={Images.mine.shipin} />
          <Item title="广告中心" imageSource={Images.mine.ad} />
          <Item title="客服" imageSource={Images.mine.kefu} />
        </View>
      </View>
    );
  }
}

function Item(props) {
  const { title, imageSource } = props;
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
Item.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.number
};
Item.defaultProps = {
  title: '',
  imageSource: 0,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: UI.color.white,
    paddingVertical: UI.padding.normal,
    marginBottom: UI.margin.normal
  },
  row: {
    flexDirection: 'row',
    paddingVertical: UI.padding.normal,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  itemTitle: {
    fontSize: UI.fontSize.small,
    color: UI.color.black,
    marginTop: UI.padding.small
  }
});
