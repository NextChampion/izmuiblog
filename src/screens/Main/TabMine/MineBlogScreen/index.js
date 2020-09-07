import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MineBlogScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
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
