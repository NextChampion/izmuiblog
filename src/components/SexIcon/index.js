import React from 'react';
import {
  Image, StyleSheet
} from 'react-native';
import Images from '../../images';

export default function SexIcon(props) {
  const { type, style } = props || {};
  function getSexIcon() {
    switch (type) {
      case 'm':
        return Images.user.sex_male;
      case 'f':
        return Images.user.sex_female;
      case 'n':
        return null;
      default:
        return null;
    }
  }
  const icon = getSexIcon();
  if (!icon) {
    return null;
  }
  return <Image style={StyleSheet.compose(styles.container, style)} source={icon} />;
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
  }
});
