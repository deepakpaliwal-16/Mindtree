import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style'
import Images from '../themes/images'
import ButtonComponent from '../Component/button'
const DATA = [
  {
    title: 'Main dishes',
    email: 'jsfljl@mail.cnld',
    avail: false,
    lastday:true
  },
  {
    title: 'Main dishes',
    email: 'jsfljl@mail.com',
    avail: false,
    lastday: false
  },
  {
    title: 'Main dishes',
    email: 'jsfljl@gmail.cnld',
    avail: false,
    lastday: false
  },
  {
    title: 'Main dishes',
    email: 'fljl@mail.cnld',
    avail: false,
    lastday: false
  },
  {
    title: 'Main dishes',
    email: 'jsfl@mail.cnld',
    avail: false,
    lastday: false
  },
  {
    title: 'Main dishes',
    email: 'jsflsfdjlyt@mail.cnld',
    avail: false,
    lastday: false
  },
  {
    title: 'Main dishes',
    email: 'jsfljghjglyt@mail.cnld',
    avail: true,
    lastday: false
  },
];

export default class AccountScreen extends Component {
  _renderDayStreakView = (text1,text2) =>{
    return (
      <View>
        <Text style={styles.DayStreakText1}>{text1}</Text>
        <Text style={styles.DayStreakText2}>{text2}</Text>
      </View>
    );
  }
  _renderDayMiddleStreakView = (text1, text2) => {
    return (
      <View style={styles.DayStreakView}>
        <Text style={styles.DayStreakText1}>{text1}</Text>
        <Text style={styles.DayStreakText2}>{text2}</Text>
      </View>
    );
  }
  flatListApiDataShow = ({ item, index }) => {
    
    
      if (item.avail== true && item.lastday==false) {
        return (
          <View>
          <Image source={Images.rightSign} resizeMode={'contain'} style={styles.accountgrowTree2} />  
          </View>
        );
      }
      else if (item.avail == false && item.lastday == false){
        return (
          <View>
          <Image source={Images.accountoval} resizeMode={'contain'} style={styles.accountgrowTree2} />
          </View>
          );
      }
    
   else{
      return (
        <Image source={Images.accountOvaltree} resizeMode={'contain'} style={styles.accountgrowTree2} />
      );
   }
  }
  _renderGrow = () =>{
    return (
      <View style={styles.Grow}>
        <Text style={styles.GrowthText1}>Your Mindtree is growing</Text>
        <View style={{flexDirection:'row'}}>
          <Image source={Images.accountTree} resizeMode={'contain'} style={styles.accountTree} />
          <View style={styles.accountgrowTreeView}>
            <FlatList
             inverted={true}
              data={DATA}
              renderItem={
                this.flatListApiDataShow
              }
              horizontal={true}
              // refreshing={this.state.refreshing}
              // numColumns={1}
              keyExtractor={item => item.email}
            />
            <Text style={styles.GrowthText2}>Tree planted every 7-day streak</Text>
          </View>
        </View>
      </View>
    );
  }
  _renderInvite = () =>{
    return (
      <View style={styles.InViteView}>
        <TouchableOpacity>
          <Text style={styles.InviteFirstText}>Invite Friends</Text>
          <Text style={styles.InviteSecondText}>and plant more trees</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderForest =() =>{
    return (
      <View style={styles.ForestView}>
        <View style={styles.forestTextAllView}>
          <Text style={styles.ForestFirstText}>
      Your forest is
      </Text>
      <View style={{flexDirection:'row'}}>
            <Text style={styles.ForestSecondText}>
      9
      </Text>
            <Text style={styles.ForestThirdText}>
      trees
      </Text>
            
      </View>
          <ButtonComponent
            title='How it works'
            style1={styles.introButton3View}
            style={styles.introButton3}
            textStyles={styles.introButton3Text}
            onPress={() => this.props.navigation.navigate('Account')}
          />
      </View>
      <View>
          <Image source={Images.forest} resizeMode={'contain'} style={styles.forestImage} />
      </View>
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
            <Text style={styles.welComeText}>Your personal</Text>
            <Text style={styles.NameText}>Growth</Text>
          </ImageBackground>
        </View>
        <View style={styles.containerModalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
          <View style={styles.DayStreak}>
              {this._renderDayStreakView("63","Day Streak")}
              {this._renderDayMiddleStreakView("490", "Minutes")}
              {this._renderDayStreakView("89", "Sessions")}
          </View>
            {this._renderGrow()}
            {this._renderInvite()}
            {this._renderForest()}
          </ScrollView>
          </View>
      </View>
    )
  }
}