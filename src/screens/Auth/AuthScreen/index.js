import React, { PureComponent } from 'react';
import {
  View, StyleSheet, ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import {
  AppKey,
  redirectUri,
  clientSecret,
  UserUrl,
} from '../../../server/lib/base';
import { Header } from '../../../components';

import blog from '../../../blog';

export default class AuthScreen extends PureComponent {
  // 获取code
  onNavigationStateChange = (e) => {
    if (e.loading === true) {
      const [, query] = e.url.split('?');
      const [, value] = query.split('=');
      this.loginAction(value); // 获取授权
    }
  };

  // 获取授权
  loginAction = async (code) => {
    const uri = `${UserUrl.authUrl
    }?client_id=${
      AppKey
    }&client_secret=${
      clientSecret
    }&grant_type=`
      + 'authorization_code'
      + `&code=${
        code
      }&redirect_uri=${
        redirectUri}`;
    const res = await blog.mine.auth(uri);
    const { success, data } = res || {};
    if (!success) {
      return;
    }
    blog.mine.save(data);
  };

  rightAction = () => {};

  renderActivityIndicator = () => (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  )

  render() {
    const uri = `${UserUrl.auth}?client_id=${AppKey}&redirect_uri=${redirectUri}`;
    return (
      <View style={styles.container}>
        <Header />
        <WebView
          onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
          style={styles.webview}
          source={{ uri, method: 'GET' }}
          startInLoadingState
          renderLoading={this.renderActivityIndicator}
        />
      </View>
    );
  }
}

AuthScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    pop: PropTypes.func,
  })
};

AuthScreen.defaultProps = {
  navigation: {
    navigate: () => {},
    pop: () => {}
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
