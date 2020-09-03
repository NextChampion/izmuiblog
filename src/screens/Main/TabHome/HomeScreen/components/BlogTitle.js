import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';

export default class BlogTitle extends PureComponent {
  render() {
    const { data, } = this.props;
    const { text, } = data || {};
    return (
      <View style={styles.container}>
        <Text style={styles.blogTitle}>
          {text}
        </Text>
      </View>
    );
  }
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
  blogTitle: {}
});
