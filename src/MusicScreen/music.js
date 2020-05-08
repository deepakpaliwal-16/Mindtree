import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  
} from 'react-native';
import styles from './style'
import Images from '../themes/images'
import ProgressCircle from 'react-native-progress-circle'

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count1: 0 };

  }
  _onPressButton1 = () => {
    if (this.state.count == 0) {
      this.setState({
        count: 1,
        
      })
    }
    else if (this.state.count == 1){
      this.setState({
        count: 2
      })
    }
    else {
      this.setState({
        count:0
      })
    }
  }
  render(){
    return (
      <View
      style={styles.container}
      >
        <TouchableOpacity
          style={styles.ImageCloseBackTree}
          onPress={() => this.props.navigation.goBack()}
        >
          <ImageBackground source={Images.whiteClose} style={styles.ImageCloseTree}></ImageBackground>
        {/* <Image source={Images.whiteClose} resizeMode={'contain'} style={styles.ImageCloseTree} /> */}
        </TouchableOpacity>
        <ImageBackground source={Images.playCloud} style={styles.ImageBackgroundView}>
          <ProgressCircle
            percent={70}
            radius={70}
            borderWidth={13}
            color="rgb(255,255,255)"
            shadowColor="rgba(255,255,255,0.1)"
            bgColor="rgb(158,186,212)"
            
          >
            <TouchableOpacity
              onPress={this._onPressButton1}
            >
              {this.state.count == 0 ? <Image source={Images.play} resizeMode={'contain'} style={styles.play} /> : this.state.count == 1 ? <Image source={Images.pause} resizeMode={'contain'} style={styles.play} /> : <Image source={Images.stop} resizeMode={'contain'} style={styles.play} />}
            </TouchableOpacity>
          </ProgressCircle>
          <Text style={styles.playText}>Joy For A Friend</Text>
          <View style={styles.timeView}>
            <Text style={styles.timeText}>05:00</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

}