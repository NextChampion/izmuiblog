import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import UI from '../../../../../UI';

export default class Blog extends PureComponent {
  render() {
    const { data, } = this.props;
    console.log('data', data);
    const { created_at: createdAt, source, text } = data || {};
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Image style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.nickname}>nickname</Text>
            <Text style={styles.createTime}>
              {createdAt}
              {' '}
              <HTMLView
                value={source}
                stylesheet={styles.htmlView}
              />
            </Text>
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
  userInfo: {},
  nickname: {
    color: UI.color.primary
  },
  createTime: {},
  source: {

  },
  htmlView: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});
