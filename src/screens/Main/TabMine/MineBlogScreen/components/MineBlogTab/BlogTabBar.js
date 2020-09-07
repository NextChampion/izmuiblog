import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import UI from '../../../../../../UI';

export default class BlogTabBar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TabBar
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...this.props}
          style={styles.tabbar}
          renderTabBarItem={(props) => {
            const { route, onPress } = props;
            const { title } = route || {};
            return (
              <TouchableOpacity style={styles.tabbarItem} onPress={onPress}>
                <Text>{title}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text>按钮</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: UI.color.white
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
  },
  tabbar: {
    width: UI.size.windowWidth - 60,
    height: 30,
    backgroundColor: UI.color.white
  },
  button: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
