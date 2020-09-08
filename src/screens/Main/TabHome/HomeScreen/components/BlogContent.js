import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import UI from '../../../../../UI';
import { handleBlogTitle } from '../../../../../utils';
import Images from '../../../../../images';
import izmuz from '../../../../../izmuz';

export default class BlogContent extends PureComponent {
  render() {
    const { data, } = this.props;
    const { text, user, thumbnail_pic: thumbnailPic } = data || {};
    const { screen_name: screenName } = user || {};
    const array = handleBlogTitle(text);
    const [element] = handleTitleArray(array);
    const {
      contentWithoutHighlight, highlightArray, shortUrl, shareInfo
    } = element || {};
    const arr = getContentWithEmojiInfo(contentWithoutHighlight);
    const shortUrlHttp = `http://${shortUrl}`;
    return (
      <View style={styles.container}>
        <Text style={styles.blogTitle}>
          {arr ? arr.map((ele) => {
            if (ele.search(']') === ele.length - 1) {
              const emojiName = ele.substring(0, ele.length - 1);
              const emojiInfo = izmuz.common.getEmojiUrl(`[${emojiName}]`);
              const { url } = emojiInfo || {};
              return <Image style={styles.emoji} source={{ uri: url }} />;
            }
            return ele;
          }) : null}
          {highlightArray && highlightArray.length
            ? <Text style={styles.highlight}>{highlightArray.map((e) => e && e.trim() && `#${e}#`)}</Text> : null}
          {shortUrl ? (
            <>
              {' '}
              <Image style={styles.videoIcon} source={Images.blog.video} />
              <Text style={styles.highlight}>{`${screenName}的视频`}</Text>
              {' '}
            </>
          ) : null}
          {shareInfo ? shareInfo.map((ele) => {
            const [nickname, desc] = ele || {};
            return (
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              <Text key={nickname}>
                //
                <Text style={styles.highlight}>
                  {`@${nickname}`}
                </Text>
                <Text>
                  :
                  {desc && desc.trim()}
                </Text>
              </Text>
            );
          }) : null}
        </Text>
        <View style={styles.content}>
          {thumbnailPic
            ? <Image style={styles.thumbnailPic} source={{ uri: thumbnailPic }} /> : null}
          {shortUrl ? <WebView style={styles.webview} source={{ uri: shortUrlHttp }} /> : null}
        </View>
      </View>
    );
  }
}

function handleTitleArray(array) {
  // 拆成数组以后的标题内容
  // 如果没有标题
  if (!array) {
    return [];
  }
  // 如果长度为1表示没有@其他人的内容
  if (array.length === 1) {
    // 取出来消息内容
    const content = array[0];
    // 根据是否有 全文: 分开字符串,如果所有的话,需要匹配对应的链接信息
    // 第一部分是标题内容,后一部分是全文对应的链接地址
    const [contentWithoutAll, url] = content.split('全文： ');
    // 继续拆第一部分的内容,看是不是有 http:// 判断是不是有来源连接信息,这个连接一般都是短连接
    // 第一部分表示标题正文,第二部分是短连接
    const [contentWithoutHttp, shortUrl] = contentWithoutAll.split('http://');
    // 此时需要看看是不是有话题相关的问题 通过 ## 包起来的是话题名称.
    // 第一部分是正文, 后面的都是话题名称,需要高亮显示
    // 此时有个问题,话题名称可能在标题的开头或者中间位置.目前 这么处理有问题. 需要改为用正则去替换.
    const pattern = /#.*?#/g;
    const [contentWithoutHighlight, ...highlight] = contentWithoutHttp.split('#');
    // console.log('contentWithoutHighlight', contentWithoutHighlight);
    // 最后返回
    const item = {
      contentWithoutHighlight,
      highlightArray: highlight,
      shortUrl,
      url,
    };
    return [item];
  }
  const contentWithoutHighlight = array.shift();
  // console.log('contentWithoutHighlight11', contentWithoutHighlight);
  const shareInfo = array.map((ele) => ele.split(':'));
  return [{
    contentWithoutHighlight,
    shareInfo
  }];
}

function getContentWithEmojiInfo(text) {
  const arr = text.split('[');
  return arr;
}

BlogContent.propTypes = {
  data: PropTypes.shape({})
};

BlogContent.defaultProps = {
  data: {}
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: UI.padding.normal,
    paddingVertical: UI.padding.tiny
  },
  blogTitle: {},
  highlight: {
    color: UI.color.blue,
  },
  videoIcon: {
    width: 12,
    height: 12,
  },
  webview: {
    width: 300,
    height: 400,
    borderWidth: 1,
  },
  emoji: {
    width: 15,
    height: 15,
  },
  content: { },
});
