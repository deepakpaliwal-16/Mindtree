import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: ''
    };
  }

  render() {
    const { title, style, onPress, textStyles,style1 } = this.props
    return (
      <View style={style1}>
        <TouchableOpacity style={style} onPress={onPress}>
          <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

