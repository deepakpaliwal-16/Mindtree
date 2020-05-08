import React, { Component } from 'react';
import ButtonComponent from '../Component/button'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Images from '../themes/images'
import styles from './style'
import ButtonImageComponent from '../Component/buttonImage'

const DATA = [
  {
    title: 'Joy For a Friend',
    time:'5 minutes',
    email: 'jsfljl@mail.cnld',
  },
  {
    title: 'Friends of Us',
    time: '4 minutes',
    email: 'ramlal@mail.com',
  },
];
export default class CourseDetail extends Component {
  _renderDayStreakView = (text1, text2) => {
    return (
      <View>
        <Image source={text1} resizeMode={'contain'} style={styles.DetailStreakImage} />
        <Text style={styles.DetailStreakText}>{text2}</Text>
      </View>
    );
  }
  _renderDayMiddleStreakView = (text1, text2) => {
    return (
      <View style={styles.DetailStreakView}>
        <Image source={text1} resizeMode={'contain'} style={styles.DetailStreakImage} />
        <Text style={styles.DetailStreakText}>{text2}</Text>
      </View>
    );
  }
  flatListApiDataShow = ({ item, index }) => {

    if (index==0) {
      return (
        <View style={styles.musicView}>
          <View style={styles.SerialNumView}>
            <Text style={styles.SrNumText}>{index + 1}</Text>
          </View>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
          <View style={styles.musicRightCheckView}>
            <Image source={Images.rightCheck} resizeMode={'contain'} style={styles.musicRightCheck} />
          </View>
        </View>
      );    
    }
    else {
      return (
        <View style={styles.musicView}>
          <View style={styles.SerialNumView}>
            <Text style={styles.SrNumText}>{index + 1}</Text>
          </View>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
          <Image source={Images.blackPlay} resizeMode={'contain'} style={styles.musicPlayImage} />
        </View>
      ); 
    }
  
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerView}>
          <ImageBackground source={Images.mediStreesFree} style={styles.ImageBackgroundView}>
            <Image source={Images.whiteClose} resizeMode={'contain'} style={styles.ImageCloseTree} />
          </ImageBackground>
        </View>
        <View style={styles.containerModalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
           <Text style={styles.TitleText}>Seven days of Joy</Text>
            <View style={styles.DetailStreak}>
              {this._renderDayStreakView(Images.timeWatch, "5-7 Mins")}
              {this._renderDayMiddleStreakView(Images.musicheadphone, "Meditation")}
              {this._renderDayStreakView(Images.heartLike, "Focus")}
            </View>
            <Text style={styles.DetailsText}>Oftentimes, we depend on specific{"\n"}circumstances to bring joy into our lives. I’ll be happy when I get this new job or help people around me.</Text>
            <ButtonImageComponent
              title='Play'
              viewStyle={styles.playButtonView}
              buttonStyle={styles.playButton}
              textStyles={styles.playButtonText}
              image={Images.smallPlay}
              styleImage={styles.playImage}
              onPress={() => this.props.navigation.navigate('musicCourse')}
            />
            <FlatList
              inverted={false}
              data={DATA}
              renderItem={
                this.flatListApiDataShow
              }
              horizontal={false}
              keyExtractor={item => item.email}
            />
          </ScrollView>
          </View>
      </View>
    );
  }

}
