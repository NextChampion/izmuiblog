import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import UI from '../../../../../../UI';

export default class Line extends PureComponent {
  render() {
    const {
      title, onPress, content, highlight
    } = this.props;
    const contentStyle = highlight ? styles.highlightContent : styles.content;
    return (
      <TouchableOpacity style={styles.container} disabled={!onPress} onPress={onPress}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={contentStyle}>
          {content}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: UI.color.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: UI.color.gray,
    paddingVertical: 6,
  },
  title: {
    fontSize: UI.fontSize.small,
    color: UI.color.gray,
    width: 60,
  },
  highlightContent: {
    fontSize: UI.fontSize.small,
    color: UI.color.blue
  },
  content: {
    fontSize: UI.fontSize.small,
    color: UI.color.black
  }
});
