import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MineBlogUserInfo from './components/MineBlogUserInfo';
import connect from '../../../../redux/connect';
import MineBlogTab from './components/MineBlogTab';

@connect(['mine'])
export default class MineBlogScreen extends PureComponent {
  render() {
    const { mine } = this.props;
    return (
      <View style={styles.container}>
        <MineBlogUserInfo data={mine} />
        <MineBlogTab />
      </View>
    );
  }
}

MineBlogScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }),
  mine: PropTypes.shape({
    get: PropTypes.func
  })
};

MineBlogScreen.defaultProps = {
  navigation: {
    navigate: () => {}
  },
  mine: {
    get: () => {}
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
