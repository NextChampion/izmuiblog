import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Navigator1 from './Navigator1';
import {
  AppKey,
  redirect_uri,
  client_secret,
  user_url,
} from '../../../server/lib/base';
import {Header} from '../../../components';
import server from '../../../server';

export default class AuthScreen extends PureComponent {
  //获取code
  onNavigationStateChange = (e) => {
    console.log('onNavigationStateChange', e);
    if (e.loading === true) {
      console.log('e.url', e.url);
      const [domain, query] = e.url.split('?');
      const [key, value] = query.split('=');
      this.loginAction(value); // 获取授权
    }
  };

  //获取授权
  loginAction = (code) => {
    // 网络请求里面 有 存值 有 跳转  ? 性能问题
    var uri =
      user_url.authUrl +
      '?client_id=' +
      AppKey +
      '&client_secret=' +
      client_secret +
      '&grant_type=' +
      'authorization_code' +
      '&code=' +
      code +
      '&redirect_uri=' +
      redirect_uri;
    fetch(uri, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((userInfo) => {
        server.user.save(userInfo);
      });
  };

  leftAction = () => {
    this.props.navigator.pop({});
  };

  rightAction = () => {};

  renderActivityIndicator() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  render() {
    let uri =
      user_url.auth + '?client_id=' + AppKey + '&redirect_uri=' + redirect_uri;
    return (
      <View style={styles.container}>
        <Header />
        <Navigator1
          leftText="返回"
          centerText="授权"
          rightText="  "
          leftAction={() => this.leftAction()}
          rightAction={() => this.rightAction()}
        />
        <WebView
          onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
          style={styles.webview}
          source={{uri: uri, method: 'GET'}}
          startInLoadingState={true}
          renderLoading={this.renderActivityIndicator}
        />
      </View>
    );
  }
}

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
