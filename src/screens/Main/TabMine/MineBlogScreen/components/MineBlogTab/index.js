import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, } from 'react-native-tab-view';
import MineBlogHomeScreen from '../../../MineBlogHomeScreen';
import MineBlogListScreen from '../../../MineBlogListScreen';
import MineBlogVideoScreen from '../../../MineBlogVideoScreen';
import MineBlogPhotoScreen from '../../../MineBlogPhotoScreen';
import BlogTabBar from './BlogTabBar';

const initialLayout = { width: Dimensions.get('window').width };

export default function MineBlogTab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: '主页' },
    { key: 'blog', title: '微博' },
    { key: 'video', title: '小视频' },
    { key: 'photo', title: '相册' },
  ]);

  const renderScene = SceneMap({
    home: MineBlogHomeScreen,
    blog: MineBlogListScreen,
    video: MineBlogVideoScreen,
    photo: MineBlogPhotoScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderTabBar={(props) => <BlogTabBar {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
