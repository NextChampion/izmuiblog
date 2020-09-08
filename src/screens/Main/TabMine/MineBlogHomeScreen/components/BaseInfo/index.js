import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RowItem } from '../../../../../../components';
import Line from './Line';
import UI from '../../../../../../UI';

export default class BaseInfo extends PureComponent {
    onTitlePress = () => {
      console.log('onTitlePress');
    }

    onLinePress = () => {
      console.log('onLinePress');
    }

    render() {
      return (
        <View style={styles.container}>
          <RowItem title="基本资料" onPress={this.onTitlePress} />
          <Line title="信息" content="男 30岁 金牛座 北京 朝阳区" />
          <Line title="公司" content="点击编辑我的公司" highlight onPress={this.onLinePress} />
          <Line title="学校" content="男 30岁 金牛座 北京 朝阳区" highlight />
          <Line title="感情状态" content="恋爱中" />
          <Line title="注册时间" content="2011-02-26" />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: UI.color.white,
    paddingHorizontal: UI.padding.normal,
    marginTop: UI.margin.normal,
  }
});
