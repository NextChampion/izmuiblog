import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import PropTypes from 'prop-types';
import UI from '../../../../../UI';

export default class BlogHeader extends PureComponent {
  render() {
    const { data, screenName } = this.props;
    const {
      created_at: createdAt, source, user,
    } = data || {};
    const { avatar_hd: avatarHd, } = user || {};
    const time = moment(createdAt).fromNow();
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: avatarHd }} />
        <View style={styles.userInfo}>
          <Text style={styles.nickname}>{screenName}</Text>
          <View style={styles.desc}>
            <Text style={styles.createTime}>
              {time}
            </Text>
            {source ? (
              <>
                <Text>来自</Text>
                <HTMLView
                  value={source}
                  stylesheet={styles.htmlView}
                />
              </>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
BlogHeader.propTypes = {
  data: PropTypes.shape({}),
  screenName: PropTypes.string,
};

BlogHeader.defaultProps = {
  data: {},
  screenName: '',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: UI.padding.normal,
    paddingVertical: UI.padding.normal
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  nickname: {
    color: UI.color.primary,
    marginLeft: 5,
    marginBottom: 5,
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
  },
});
