import React, { PureComponent } from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';

export default class BlogContent extends PureComponent {
  render() {
    const { data } = this.props;
    const {
      thumbnail_pic: thumbnailPic
    } = data || {};
    return (
      <View style={styles.container}>
        {thumbnailPic ? <Image style={styles.thumbnailPic} source={{ uri: thumbnailPic }} /> : null}
      </View>
    );
  }
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
  },
  thumbnailPic: {
    width: 150, height: 150
  }
});
