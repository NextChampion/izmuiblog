import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PlaceHolder extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> 暂无数据 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
