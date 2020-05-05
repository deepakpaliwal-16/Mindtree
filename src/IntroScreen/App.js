import React, { Component } from 'react';
import Images from '../themes/images'
import styles from './style'
import ButtonComponent from '../Component/button'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    image: Images.intro1,
  },
  {
    key: 2,
    title: 'Live Mindfully',
    text: 'Learn how to meditate, reduce stress and make\nlife easier in a fun and\nrewarding way',
    image: Images.intro2,
  },
  {
    key: 3,
    title: 'Save The Planet',
    text: 'For each week you practice meditation,\nMindtree plants a real tree through our\nreforestation program.',
    image: Images.intro3,

  }
];
export default class App extends Component {
  _renderItem = ({ item }) => {
    return (
      item.key == 1 ? <View
        style={styles.containerIntro1}
      >
        <Image source={item.image} resizeMode={'contain'} style={styles.introImage1} />
      </View> : item.key == 2 ? <View
        style={styles.containerIntro2}
      >
        <Image source={item.image} resizeMode={'contain'} style={styles.introImage2} />
        <Text style={styles.introText2}>{item.title}</Text>
        <Text style={styles.introText21}>{item.text}</Text>
      </View> : <View
        style={styles.containerIntro3}>
            <Image source={item.image} resizeMode={'contain'} style={styles.introImage3} />
            <Text style={styles.introText2}>{item.title}</Text>
            <Text style={styles.introText21}>{item.text}</Text>
            <ButtonComponent
              title='Get Started'
              style1={styles.introButton3View}
              style={styles.introButton3}
              textStyles={styles.introButton3Text}
              onPress={() => this.props.navigation.navigate('second')}
            />
            <View style={styles.intro3Horizontal}>
              <Text style={styles.intro32HorizontalText}>Already have an account?</Text>
              <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('third')}
              >
                <Text style={styles.intro31HorizontalText}> Sign In</Text>
              </TouchableOpacity>
            </View>
            
          </View>

    );
  }
  render() {
    return (
      <AppIntroSlider renderItem={this._renderItem} data={slides}
        showNextButton={false} showDoneButton={false} showPrevButton={false} showSkipButton={false}
      />
    );
  }
}





