import React, { PureComponent } from 'react';
import {
  View, Alert,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import izmuz from '../../../../izmuz';
import Blog from '../../TabHome/HomeScreen/components/Blog';
import connect from '../../../../redux/connect';
// import Blog from './components/Blog';

@connect(['mine'])
export default class MineBlogListScreen extends PureComponent {
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
    const { mine } = this.props;
    const uid = mine.get('idstr');
    const result = await izmuz.blogs.getBlogListWithUserId(uid);
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

  keyExtractor = (item) => item.idstr

  render() {
    const { bolgs } = this.state;
    return (
      <View>
        <FlatList
          data={bolgs}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

MineBlogListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }),
  mine: PropTypes.shape({
    get: PropTypes.func
  })
};

MineBlogListScreen.defaultProps = {
  navigation: {
    navigate: () => {}
  },
  mine: {
    get: () => {}
  }
};
