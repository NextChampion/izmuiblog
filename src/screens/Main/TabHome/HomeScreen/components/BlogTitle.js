import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';
import { handleBlogTitle } from '../../../../../utils';
import Images from '../../../../../images';

export default class BlogTitle extends PureComponent {
  render() {
    const { data, } = this.props;
    const { text, user } = data || {};
    const { screen_name: screenName } = user || {};
    const array = handleBlogTitle(text);
    const [element] = handleTitleArray(array);
    const {
      contentWithoutHighlight, highlightArray, shortUrl, shareInfo
    } = element || {};
    return (
      <View style={styles.container}>
        <Text style={styles.blogTitle}>
          {contentWithoutHighlight}
          {highlightArray && highlightArray.length ? <Text style={styles.highlight}>{ highlightArray.map((e) => e && e.trim() && `#${e}#`)}</Text> : null}
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
              <>
                <Text>//</Text>
                <Text style={styles.highlight}>
                  {`@${nickname}`}
                </Text>
                <Text>
                  :
                  {desc && desc.trim()}
                </Text>
              </>
            );
          }) : null}
        </Text>
      </View>
    );
  }
}

function handleTitleArray(array) {
  if (!array) {
    return [];
  }
  if (array.length === 1) {
    const content = array[0];
    const [contentWithoutAll, url] = content.split('全文： ');
    const [contentWithoutHttp, shortUrl] = contentWithoutAll.split('http://');
    const [contentWithoutHighlight, ...highlight] = contentWithoutHttp.split('#');
    const item = {
      contentWithoutHighlight,
      highlightArray: highlight,
      shortUrl,
      url,
    };
    return [item];
  }
  const contentWithoutHighlight = array.shift();
  const shareInfo = array.map((ele) => ele.split(':'));
  return [{
    contentWithoutHighlight,
    shareInfo
  }];
}

BlogTitle.propTypes = {
  data: PropTypes.shape({})
};

BlogTitle.defaultProps = {
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
  }
});
