import React, { PureComponent } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogFooter from './BlogFooter';

export default class Blog extends PureComponent {
  render() {
    const { data, } = this.props;
    const { user } = data || {};
    const { screen_name: screenName } = user || {};
    return (
      <View style={styles.container}>
        <BlogHeader screenName={screenName} data={data} />
        <BlogContent data={data} />
        <BlogFooter data={data} />
      </View>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.shape({})
};

Blog.defaultProps = {
  data: {}
};

const styles = StyleSheet.create({
  container: {
    marginTop: UI.margin.normal,
    backgroundColor: UI.color.white
  },
  titleView: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green'
  },
  userInfo: {
    justifyContent: 'center'
  },
  nickname: {
    color: UI.color.primary,
    marginLeft: 5,
  },
  desc: {
    flexDirection: 'row',
  },
  createTime: {
    marginHorizontal: 5
  },
  source: {
  },
  htmlView: {
    // fontWeight: '300',
    // color: '#FF3366', // make links coloured pink
    // fontSize: 10,
  },
});
