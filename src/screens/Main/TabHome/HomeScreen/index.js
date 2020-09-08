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
  View, Alert, FlatList
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
    const { success, data, error } = result || {};
    if (!success) {
      Alert.alert('Error', error);
      return;
    }
    const { statuses } = data || {};
    this.setState({ loaded: true, blogs: statuses });
  }

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Setting');
  };

  renderItem = ({ item }) => <Blog data={item} />

  keyExtractor = (item) => item.idstr

  render() {
    const { blogs } = this.state;
    return (
      <View>
        <FlatList data={blogs} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
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
