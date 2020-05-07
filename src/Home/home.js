import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './style'
import Images from '../themes/images'
export default class HomeScreen extends Component {

  _renderModal = () => {
    return (
      <View style={styles.HomefirstModalView}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content" />
        <ImageBackground source={Images.homegirl} style={styles.ImageGirlBackgroundView}
          imageStyle={{ borderRadius: 12 }}
        >
        <View style={styles.FirstModalView}>
        <View>
              <Text style={styles.FirstModalDayText}>Day 1 of 7</Text>
              <Text style={styles.FirstModalDetailText}>7 days meditation course</Text>
        </View>
            <Image source={Images.homeGreenPlay} resizeMode={'contain'} style={styles.firstModalImage} />
        </View>
        </ImageBackground>
        </View>
    );
  }
  _renderDailyMindtree = () => {
    return (
      <ImageBackground source={Images.homeModalCloud} style={styles.ImageModal2BackgroundView}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.SecondModalView}>
          <View>
            <Text style={styles.SecondModalDailyText}>Daily Mindtree</Text>
            <Text style={styles.FirstModalDetailText}>Meditation of the day</Text>
          </View>
          <Image source={Images.homeWhitePlay} resizeMode={'contain'} style={styles.secondModalImage} />
        </View>
      </ImageBackground>
    );
  }

  _renderGrowthStage = () =>{
   return (
     <View style={styles.ThirdBackgroundView}>
       <View style={styles.ThirdModalView}>
         <View style={styles.ThirdModalRow}>
           <Text style={styles.ThirModalGrowthText}>Growth stage</Text>
           <Text style={styles.FirstModalDetailText}>7 days until next tree</Text>
         </View>
         <Image source={Images.homeModaltree} resizeMode={'contain'} style={styles.ThirdModalImage} />
       </View>
     </View>
   );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerView}>
          <ImageBackground source={Images.homeCloud} style={styles.ImageBackgroundView}>
            <Image source={Images.homeInviteTree} resizeMode={'contain'} style={styles.ImageHeaderTree} />
            <Text style={styles.welComeText}>Welcome back,</Text>
            <Text style={styles.NameText}>Steffen</Text>
          </ImageBackground>
        </View>
        <View style={styles.containerModalView}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
          >
          <Text style={styles.modalStartText}>Start here</Text>
          {this._renderModal()}
          {this._renderDailyMindtree()}
          {this._renderGrowthStage()}
          </ScrollView>
        </View>
       
      </View>
    )
  }
}