import React from 'react';
import {
  Image, StyleSheet, View
} from 'react-native';
import UI from '../../UI';

export default function Avatar(props) {
  const { source, style, size } = props || {};
  if (!source) {
    return null;
  }
  function getStyles() {
    const innerSize = size || 80;
    const container = {
      backgroundColor: UI.color.white,
      width: innerSize,
      height: innerSize,
      borderRadius: innerSize / 2,
      alignItems: 'center',
      justifyContent: 'center',
    };
    const imageSize = innerSize - 10;
    const imageStyle = {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2,
    };
    return { container, imageStyle };
  }
  const { container, imageStyle } = getStyles();
  return (
    <View style={StyleSheet.compose(container, style)}>
      <Image style={imageStyle} source={{ uri: source }} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: UI.color.white,
//     padding: 5,
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 30
//   }
// });
