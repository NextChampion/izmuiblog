import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { SexIcon, Avatar } from '../../../../../../components';

export default class MineBlogUserInfo extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Avatar size={70} source={data.get('avatar_large')} />
        <View style={styles.nicaknameContainer}>
          <Text style={styles.nickname}>{data.get('screen_name')}</Text>
          <SexIcon type={data.get('gender')} />
        </View>
        <View style={styles.countView}>
          <Text>
            {' '}
            关注
            {' '}
            {data.get('friends_count')}
          </Text>
          <Text> | </Text>
          <Text>
            {' '}
            粉丝
            {' '}
            {data.get('followers_count')}
          </Text>
        </View>
        <Text style={styles.desc}>
          {' '}
          简介:
          {data.get('description')}
          {' '}
        </Text>
      </View>
    );
  }
}
MineBlogUserInfo.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.number,
    get: PropTypes.func
  }),
};
MineBlogUserInfo.defaultProps = {
  data: {
    size: 0,
    get: () => {}
  },
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red'
  },
  nicaknameContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    backgroundColor: 'green'
  },
  sexIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'blue'
  },
  countView: {
    flexDirection: 'row',
    marginTop: 5,
  },
  desc: {
    marginTop: 5,

  }
});
