import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Num extends Component {
  static whyDidYouRender = true;

  render() {
    const { num } = this.props;
    return (
      <View>
        <Text>
          {num}
        </Text>
      </View>
    );
  }
}
