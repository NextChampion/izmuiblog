import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';

export default class Blog extends PureComponent {
  render() {
    const { data, } = this.props;
    const {
      created_at: createdAt, source, text, user
    } = data || {};
    const { avatar_hd: avatarHd, screen_name: screenName } = user || {};
    const time = moment(createdAt).fromNow();
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Image style={styles.avatar} source={{ uri: avatarHd }} />
          <View style={styles.userInfo}>
            <Text style={styles.nickname}>{screenName}</Text>
            <View style={styles.desc}>
              <Text style={styles.createTime}>
                {time}
              </Text>
              <HTMLView
                value={source}
                stylesheet={styles.htmlView}
              />
            </View>

          </View>
        </View>
        <View style={styles.blogTitleView}>
          <Text style={styles.blogTitle}>
            {text}
          </Text>
        </View>
        <Text> textInComponent </Text>
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
    borderWidth: 1
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
    color: '#FF3366', // make links coloured pink
    fontSize: 10,
  },
});
