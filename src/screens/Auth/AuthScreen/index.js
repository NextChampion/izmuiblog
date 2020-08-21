import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Navigator1 from './Navigator1';
import {AppKey, redirect_uri, client_secret} from '../../../server/lib/base';

export default class AuthScreen extends PureComponent {
  //获取code
  onNavigationStateChange = (e) => {
    console.log('e', e);
    if (e.loading === true) {
      var indexStart = e.url.indexOf('=');
      var indexEnd = e.url.indexOf('&');
      var code = e.url.substring(indexStart + 1, indexEnd);
      this.loginAction(code); // 获取授权
    }
  };

  //获取授权
  loginAction = (code) => {
    console.log('loginAction code', code);
    // 网络请求里面 有 存值 有 跳转  ? 性能问题
    const authUrl = 'https://api.weibo.com/oauth2/access_token';
    var uri =
      authUrl +
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
    console.log('loginAction uri', uri);
    fetch(uri, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        if (json.access_token) {
          //请求uid
          let url =
            'https://api.weibo.com/2/account/get_uid.json?access_token=' +
            json.access_token;
          fetch(url)
            .then((response) => response.json())
            .then((jsonStr) => {
              console.log('jsonjsonjsonjson', jsonStr);
              let uid = jsonStr.uid.toString();
              //存uid
              console.log('uid', uid);
            });
        }
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
      'https://api.weibo.com/oauth2/authorize?client_id=' +
      AppKey +
      '&redirect_uri=' +
      redirect_uri;
    console.log('render uri', uri);
    return (
      <View style={styles.container}>
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
