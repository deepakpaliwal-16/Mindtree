import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Images from '../themes/images'
import styles from './style'
import SwitchButton from 'switch-button-react-native'
export default class MeditateScreen extends Component {
  constructor() {
    super();

    this.state = {
      activeSwitch: 1
    };
  }
  _renderModal = () => {
    return (
      <View style={styles.HomefirstModalView}>
        <ImageBackground source={Images.mediStreesFree} style={styles.ImageGirlBackgroundView}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.FirstModalView}>
            <View>
              <Text style={styles.FirstModalDayText}>Day 1 of 7</Text>
              <Text style={styles.FirstModalDetailText}>Letting go of stress</Text>
            </View>
            <Image source={Images.homeGreenPlay} resizeMode={'contain'} style={styles.firstModalImage} />
          </View>
        </ImageBackground>
      </View>
    );
  }
  _renderThirdModal = () => {
    return (
      <View style={styles.HomefirstModalView}>
        
        <ImageBackground source={Images.homegirl} style={styles.ImageGirlBackgroundView}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.FirstModalView}>
            <View>
              <Text style={styles.SecondModalDayText}>Day 1 of 7</Text>
              <Text style={styles.SecondModalDetailText}>Find your calm</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
  _renderUnlock = () =>{
    return (
      <ImageBackground source={Images.UnlockCloud} style={styles.ImageUnlockBackgroundCloud}
        imageStyle={{ borderRadius: 12 }}
      >
        <Text style={styles.UnlockText}>Unlock Mindtree</Text>
      </ImageBackground>
    );
  }
  _rendeSingles = () =>{
    return (
      <View>
        {this._renderModal()}
        {this._renderUnlock()}
        {this._renderThirdModal()}
      </View>
    );
  }
  _renderCourses = () =>{
    return (
      <View>
        {this._renderThirdModal()}
        {this._renderUnlock()}
        {this._renderModal()}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content" />
        <View style={styles.containerView}>
          <ImageBackground source={Images.homeCloud} style={styles.ImageBackgroundView}>
            <Image source={Images.homeInviteTree} resizeMode={'contain'} style={styles.ImageHeaderTree} />
            <Text style={styles.welComeText}>Library of</Text>
            <Text style={styles.NameText}>Meditations</Text>
          </ImageBackground>
        </View>
        <View style={styles.containerModalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.SwitchButton}>
            <SwitchButton
              onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1='Courses'                        // optional: first text in switch button --- default ON
                text2='Singles'                       // optional: second text in switch button --- default OFF
              switchWidth={220}                 // optional: switch width --- default 44
              switchHeight={50}                 // optional: switch height --- default 100
              switchdirection='rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
              switchBorderRadius={10}          // optional: switch border radius --- default oval
              switchSpeedChange={500}           // optional: button change speed --- default 100
              switchBorderColor='#d4d4d4'       // optional: switch border color --- default #d4d4d4
              switchBackgroundColor='rgb(241,241,241)'      // optional: switch background color --- default #fff
              btnBorderColor='#00a4b9'          // optional: button border color --- default #00a4b9
              btnBackgroundColor='rgb(125,198,129)'      // optional: button background color --- default #00bcd4
              fontColor='rgb(169,169,169)'               // optional: text font color --- default #b1b1b1
              activeFontColor='rgb(255,240,255)'            // optional: active font color --- default #fff
            />
            </View>
            {this.state.activeSwitch === 1 ? this._renderCourses() : this._rendeSingles()}
          </ScrollView>
        </View>
      </View>
    )
  }
}