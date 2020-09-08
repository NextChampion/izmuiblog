import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import BaseInfo from './components/BaseInfo';
import connect from '../../../../redux/connect';
import Photos from './components/Photos';
import Hobby from './components/Hobby';

@connect(['mine'])
export default class MineBlogHomeScreen extends PureComponent {
  render() {
    const { mine } = this.props;
    return (
      <View>
        <BaseInfo data={mine} />
        <Photos />
        <Hobby />
      </View>
    );
  }
}
