import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import colors from '../themes/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenLightish
  },
  containerView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.209,//140
    backgroundColor: colors.greenbtnTheme,
    marginTop: metrics.screenHeight * 0.074,
  },
  ImageBackgroundView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.209,//140
  },
  ImageCloseTree: {
    width: metrics.screenWidth * 0.085,//32
    height: metrics.screenWidth * 0.085,//32
    marginRight: metrics.screenWidth * 0.085,
    alignSelf: 'flex-end'
  },
  containerModalView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.637,//450
    color: colors.white,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: metrics.screenWidth * 0.05333,
  },
  TitleText:{
    alignSelf: 'center',
    textAlign:'center',
    fontSize: 25,
    letterSpacing: 0.3,
    color: colors.blueBgTheme,
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0374,//25
  },
  DetailStreak: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: metrics.screenHeight * 0.066,//25
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  DetailStreakText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: colors.blueBgTheme,
    fontWeight: '500',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  DetailStreakView: {
    marginRight: metrics.screenHeight * 0.0746,//28
    marginLeft: metrics.screenHeight * 0.0746,//28
  },
  DetailStreakImage: {
    width: metrics.screenWidth * 0.064,//24
    height: metrics.screenWidth * 0.064,//24
    alignSelf: 'center'
  },
  DetailsText: {
    fontSize: 15,
    lineHeight:23,
    letterSpacing:0.35,
    color: colors.lightBlue,
    fontWeight: '500',
    marginTop: metrics.screenHeight * 0.0374,//25
  },
  playButtonView: {
    backgroundColor: colors.greenbtnTheme,
    width: metrics.screenWidth * 0.32,//120
    height: metrics.screenHeight * 0.0749,//55
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0299,
  },
  playButton: {
    width: metrics.screenWidth * 0.32,
    height: metrics.screenHeight * 0.0749,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
    opacity: 0.96,
    alignSelf: 'center',
    letterSpacing: 0.3,
    fontWeight: "700"
  },
  playImage: {
    width: metrics.screenWidth * 0.02933,//11
    height: metrics.screenWidth * 0.02933,//11
    alignSelf: 'center',
    marginRight: metrics.screenWidth * 0.0293,//11
  },
  musicView:{
    width: metrics.screenWidth * 0.89333,//335
    height: metrics.screenHeight * 0.1019,//68
    backgroundColor: colors.white,
    marginTop: metrics.screenHeight * 0.0299,//20
    borderRadius:10,
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    paddingLeft:metrics.screenWidth*.05333,//20
    paddingRight: metrics.screenWidth * .0666,//25
    justifyContent:'space-between'
  },
  SerialNumView:{
    width: metrics.screenWidth * 0.064,//24
    height: metrics.screenWidth * 0.064,//24
    backgroundColor: colors.lightBlueWithOpacity,
    borderRadius: 12,
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  SrNumText:{
    textAlign: 'center',
    fontSize: 16,
    color: colors.darkBlue,
    alignSelf: 'center',
    fontWeight: "700"
  },
 musicPlayImage: {
    width: metrics.screenWidth * 0.08533,//32
    height: metrics.screenWidth * 0.08533,//32
    alignSelf: 'center',
  },
  musicRightCheckView:{
    width: metrics.screenWidth * 0.08533,//32
    height: metrics.screenWidth * 0.08533,//32
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.lightGrey,
    borderRadius:16
  },
  musicRightCheck:{
    width: metrics.screenWidth * 0.02666,//10
    height: metrics.screenWidth * 0.0266,//10
  }
});