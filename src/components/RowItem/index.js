import React, { PureComponent } from 'react';
import {
  Text, StyleSheet, TouchableOpacity, ViewPropTypes
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import UI from '../../UI';

export default class RowItem extends PureComponent {
  render() {
    const { title, onPress, style } = this.props;
    return (
      <TouchableOpacity
        style={StyleSheet.flatten(styles.container, style)}
        disabled={!onPress}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
        {onPress ? <Icon name="angle-right" size={15} color={UI.color.gray} /> : null}
      </TouchableOpacity>
    );
  }
}

RowItem.propTypes = {
  title: PropTypes.string,
  style: ViewPropTypes.style,
  onPress: PropTypes.func
};

RowItem.defaultProps = {
  title: '',
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: UI.padding.normal,
    // height: 40,
    backgroundColor: UI.color.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: UI.color.gray,
  },
  title: {
    fontSize: UI.fontSize.normal,
    color: UI.color.black
  }
});
