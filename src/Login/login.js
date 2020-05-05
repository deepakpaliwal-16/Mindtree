import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import ButtonComponent from '../Component/button'
import styles from '../SignUp/style'
import ButtonImageComponent from '../Component/buttonImage'
import Images from '../themes/images'
import TextInputComponent from '../Component/inputText'
export default class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <KeyboardAwareScrollView style={styles.container}>
            <Text style={styles.SignUpText}>Sign in with</Text>
            <ButtonImageComponent
              title='Facebook'
              viewStyle={styles.fbButtonView}
              buttonStyle={styles.fbButton}
              textStyles={styles.fbButtonText}
              image={Images.fb}
              styleImage={styles.fbImage}
              onPress={() => this.props.navigation.navigate('second')}
            />
            <ButtonImageComponent
              title='Google'
              viewStyle={styles.gmailButtonView}
              buttonStyle={styles.fbButton}
              textStyles={styles.gmailButtonText}
              image={Images.gmail}
              styleImage={styles.fbImage}
              onPress={() => this.props.navigation.navigate('second')}
            />
            <Text style={styles.OrText}>or</Text>
            <TextInputComponent
              styles={styles.inputs}
              textInputRefs={(text) => { this.inputText = text; }}
              returnKeyType={"done"}
              multiline={false}
              placeholder='Email'
              placeholderTextColor='rgb(116,125,149)'
              onChangeText={(question) => this.setState({ question })}
              onSubmitEditing={() => this.inputText.clear()}
            />
            <TextInputComponent
              styles={styles.inputs}
              textInputRefs={(text) => { this.inputText = text; }}
              returnKeyType={"done"}
              multiline={false}
              secureTextEntry={true}
              placeholder='Password'
              placeholderTextColor='rgb(116,125,149)'
              onChangeText={(question) => this.setState({ question })}
              onSubmitEditing={() => this.inputText.clear()}
            />
            <ButtonComponent
              title='Sign In'
              style1={styles.signUpButtonView}
              style={styles.fbButton}
              textStyles={styles.fbButtonText}
              onPress={() => this.props.navigation.navigate('fourth')}
            />
            <View style={styles.intro3Horizontal}>
              <Text style={styles.intro32HorizontalText}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('second')}
              >
                <Text style={styles.intro31HorizontalText}>  Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}