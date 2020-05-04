import React, { Component } from 'react';
import Images from './src/themes/images'
import styles from './src/IntroScreen/style'
// import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
    // image: require('./assets/3.jpg'),
    image: Images.intro3,
    backgroundColor: '#22bcb5',
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
            <Image source={item.image} resizeMode={'contain'} style={styles.introImage1} />
            <Text style={styles.introText2}>{item.title}</Text>
            <Text style={styles.introText21}>{item.text}</Text>
            <View style={styles.introButton3View}>
              <TouchableOpacity style={styles.introButton3}
                activeOpacity={0.9}
                onPress={this._onPressButton}
              >
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(255,255,255)', alignSelf: 'center', fontWeight: "700" }}> Get Started</Text>
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





