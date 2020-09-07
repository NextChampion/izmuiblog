import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MineBlogUserInfo from './components/MineBlogUserInfo';
import connect from '../../../../redux/connect';

@connect(['mine'])
export default class MineBlogScreen extends PureComponent {
  render() {
    const { mine } = this.props;
    return (
      <View style={styles.container}>
        <MineBlogUserInfo data={mine} />
        <Text> MineBlogScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
