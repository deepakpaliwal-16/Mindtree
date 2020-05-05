import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class ButtonImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: ''
    };
  }

  render() {
    const { title, viewStyle, onPress, textStyles, buttonStyle, image, styleImage} = this.props
    return (
      <View style={viewStyle}>
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <View style={{flexDirection:'row'}}>
          <Image source={image} resizeMode={'contain'} style={styleImage} />
          <Text style={textStyles}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

