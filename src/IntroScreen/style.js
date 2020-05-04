import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import { Fonts } from '../themes/fonts'
var { height, width } = Dimensions.get('window');


export default StyleSheet.create({
  containerIntro1: {
    flex:1,
    backgroundColor:'rgb(125, 198, 129)'
  },
  containerIntro2: {
    flex: 1,
    backgroundColor: 'rgb(248, 251, 255)'
  },
  containerIntro3: {
    flex: 1,
    backgroundColor: 'rgb(248, 251, 255)'
  },
  introImage1: {
    width:metrics.screenWidth/1.488,
    height: metrics.screenHeight * 0.137,
    alignSelf:'center',
    marginTop: metrics.screenHeight*0.304,
  },
  introImage2: {
    width: metrics.screenWidth *0.336,
    height:metrics.screenHeight*0.179,
    alignSelf: 'center',
    marginTop: metrics.screenHeight *0.239,
  },
  introText2:{
    alignSelf:'center',
    fontSize:25,
    fontWeight:'900',
    textAlign:'center',
    marginTop: metrics.screenHeight * 0.0599,
    // fontFamily: Fonts.MuseoSansRounded900
  },
  introText21: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: 'rgb(41, 43, 69)',
    textAlign: 'center',
    marginTop: metrics.screenHeight * 0.0149,
  },
  introButton3View: {
    backgroundColor: 'rgb(125,198,129)',
    width: metrics.screenWidth * 0.84,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0599,
  },
  introButton3: {
    width: metrics.screenWidth * 0.84,
    height: metrics.screenHeight * 0.082,
    alignItems: 'center',
    justifyContent:'center'
    // paddingTop: metrics.screenHeight * 0.0599,
  },
});