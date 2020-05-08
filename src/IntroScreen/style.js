import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import { Fonts } from '../themes/fonts'
import colors from '../themes/colors'
var { height, width } = Dimensions.get('window');


export default StyleSheet.create({
  containerIntro1: {
    flex: 1,
    backgroundColor: colors.greenbtnTheme
  },
  containerIntro2: {
    flex: 1,
    backgroundColor: colors.whitelight
  },
  containerIntro3: {
    flex: 1,
    backgroundColor: colors.whitelight
  },
  introImage1: {
    width: metrics.screenWidth / 1.488,
    height: metrics.screenHeight * 0.137,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.304,
  },
  introImage2: {
    width: metrics.screenWidth * 0.336,
    height: metrics.screenHeight * 0.179,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.239,
  },
  introImage3: {
    width: metrics.screenWidth * 0.170,
    height: metrics.screenHeight * 0.224,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.1889,
  },
  introText2: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: metrics.screenHeight * 0.0599,
    letterSpacing:0.3,
    lineHeight: 35,
  },
  introText21: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: colors.lightBlue,
    textAlign: 'center',
    lineHeight:25,
    marginTop: metrics.screenHeight * 0.0149,
  },
  introButton3View: {
    backgroundColor: colors.greenbtnTheme,
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
    justifyContent: 'center'
  },
  introButton3Text: {
    textAlign: 'center', 
    fontSize: 20, 
    color: colors.white, 
    alignSelf: 'center', 
    fontWeight: "700"
  },
  intro3Horizontal: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: metrics.screenHeight * 0.0299,
  },
  intro31HorizontalText: {
    textAlign: 'center', 
    fontSize: 15, 
    color: colors.greenbtnTheme, 
    alignSelf: 'center', 
    fontWeight: "700", 
    marginTop: metrics.screenHeight * 0.0149,
  },
  intro32HorizontalText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.grey02,
    alignSelf: 'center',
    fontWeight: "700",
    marginTop: metrics.screenHeight * 0.0149,
  },
});