import React from 'react';
import { TextInput, Dimensions } from 'react-native';

export default TextInputComponent = (props) => {

  const {editable, textInputRefs, onSubmitEditing, returnKeyType,
    keyboardType, maxLength, onChangeText, styles, placeholder,
    placeholderTextColor, multiline, secureTextEntry, value } = props
  return (
    <TextInput style={styles}
      ref={textInputRefs}
      autoCorrect={true}
      editable={editable}
      value={value}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid='transparent'
      onChangeText={(text) => onChangeText(text)}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
    />
  );
}
