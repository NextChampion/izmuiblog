import React, { PureComponent } from 'react';
import {
  Image, StyleSheet, ImagePropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import izmuz from '../../izmuz';

export default class Emoji extends PureComponent {
  render() {
    const { name, style } = this.props;
    if (!name) {
      return null;
    }
    const url = izmuz.common.getEmojiUrl(name);
    return (
      <Image style={StyleSheet.compose(styles.container, style)} source={{ uri: url }} />
    );
  }
}

Emoji.propTypes = {
  name: PropTypes.string,
  style: ImagePropTypes.style,
};

Emoji.defaultProps = {
  name: '',
  style: null
};
const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
  }
});
