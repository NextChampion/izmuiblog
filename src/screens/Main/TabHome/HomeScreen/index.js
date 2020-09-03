/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:47:17
 * @LastEditTime: 2020-08-01 21:48:00
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/TabHome/HomeScreen/index.js
 */
import React, { PureComponent } from 'react';
import {
  Text, View, Button, Alert,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import izmuz from '../../../../izmuz';
import Blog from './components/Blog';

export default class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      blogs: [],
    };
  }

  componentDidMount() {
    this.getBlogList();
  }

  getBlogList = async () => {
    const result = await izmuz.blogs.getBlogList();
    console.log('ssss', result);
    const { success, data, error } = result || {};
    if (!success) {
      Alert.alert('Error', error);
      return;
    }
    const { statuses } = data || {};
    this.setState({ loaded: true, bolgs: statuses });
  }

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Setting');
  };

  renderItem = ({ item }) => <Blog data={item} />

  render() {
    const { bolgs } = this.state;
    return (
      <View>
        <Text> HomeScreen </Text>
        <Button title="跳转到setting" onPress={this.onPress} />
        <FlatList data={bolgs} renderItem={this.renderItem} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

HomeScreen.defaultProps = {
  navigation: {
    navigate: () => {}
  }
};
