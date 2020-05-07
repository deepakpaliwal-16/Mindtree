import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(41, 48, 74)'
  },
  containerView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.1799,
    backgroundColor: 'rgb(41, 48, 74)',
    marginTop: metrics.screenHeight * 0.074,
  },
  ImageBackgroundView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.1799,
  },
  ImageHeaderTree: {
    width: metrics.screenWidth * 0.1066,
    height: metrics.screenWidth * 0.1066,
    marginRight: metrics.screenWidth * 0.08,
    alignSelf: 'flex-end'
  },
  welComeText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 17,
    letterSpacing: 0.2,
    color: 'rgb(202,204,210)',
    fontWeight: '900',
    marginTop: - metrics.screenHeight * 0.025,//16.67
  },
  NameText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 27,
    letterSpacing: 0.32,
    color: 'rgb(255,255,255)',
    fontWeight: '900',
    marginTop:  metrics.screenHeight * 0.0074,//5
  },
  containerModalView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.659,
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(255,255,255)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: metrics.screenWidth * 0.05333,
  },
  DayStreak:{
    width: metrics.screenWidth*.893,//335
    height: metrics.screenHeight * 0.1349,//90
    backgroundColor: 'rgb(41,48,74)',
    borderRadius:10,
    flexDirection:'row',
    marginTop: metrics.screenHeight * 0.0524,//35
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  DayStreakView:{
    marginRight: metrics.screenHeight * 0.0746,//28
    marginLeft: metrics.screenHeight * 0.0746,//28
  },
  DayStreakText1:{
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    letterSpacing: 0.3,
    color: 'rgb(255,255,255)',
    fontWeight: '900',
    // marginTop: metrics.screenHeight * 0.0074,//5
  },
  DayStreakText2: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: 'rgb(255,255,255)',
    fontWeight: '500',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  Grow:{
    width: metrics.screenWidth * .893,//335
    height: metrics.screenHeight * 0.2293,//153
    borderRadius:10,
    padding: metrics.screenWidth * .066,//25
    // backfaceVisibility:'visible',
    backgroundColor:'rgb(255,255,255)',
    // opacity:0.96,
    shadowOpacity:0.1,
    marginTop: metrics.screenHeight * 0.0299,//20
  },
  GrowthText1:{
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    letterSpacing: 0.24,
    color: 'rgb(41,48,74)',
    fontWeight: '900',
    marginBottom: metrics.screenHeight * 0.0374,//5
  },
  accountTree: {
    width: metrics.screenWidth * 0.1466,//55
    height: metrics.screenHeight * 0.077,//52
    alignSelf: 'flex-start'
  },
  accountgrowTreeView: {
    marginLeft: metrics.screenWidth * 0.048,//18
  },
  accountgrowTree2: {
    width: metrics.screenWidth * 0.0693,//26
    height: metrics.screenWidth * 0.0693,//26
    marginLeft: metrics.screenWidth * 0.0133,//5
  },
  GrowthText2: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: 'rgb(41,48,74)',
    fontWeight: '500',
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  InViteView:{
    width: metrics.screenWidth * .893,//335
    height: metrics.screenHeight * 0.1124,//75
    borderRadius: 12,
    backgroundColor: 'rgb(125,198,129)',
    marginTop: metrics.screenHeight * 0.0299,//20
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  InviteFirstText:{
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 19,
    lineHeight:20,
    letterSpacing:0.38,
    color: 'rgb(255,255,255)',
    opacity:0.96,
    fontWeight: '900',
  },
  InviteSecondText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.26,
    color: 'rgb(255,255,255)',
    opacity: 0.96,
    fontWeight: '500',
  },
  ForestView:{
    width: metrics.screenWidth * .893,//335
    height: metrics.screenHeight * 0.2338,//156
    borderRadius: 10,
    backgroundColor: 'rgb(255,255,255)',
    marginTop: metrics.screenHeight * 0.0299,//20
    padding: metrics.screenWidth * 0.0533,//20
    flexDirection:'row'
  },
  ForestFirstText:{
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 17,
    letterSpacing: 0.2,
    color: 'rgb(41,48,74)',
    fontWeight: '900',
  },
  ForestSecondText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    letterSpacing: 0.3,
    color: 'rgb(125,198,129)',
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  ForestThirdText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    letterSpacing: 0.3,
    color: 'rgb(41,48,74)',
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0074,//5
    marginLeft:metrics.screenWidth * .01333//5
  },
  forestImage:{
    width: metrics.screenWidth * 0.416,//156
    height: metrics.screenHeight * 0.1589,//106
    marginLeft: metrics.screenWidth * 0.064,//25 
  },
  forestTextAllView:{
alignSelf:'center'
  },
  introButton3View: {
    backgroundColor: 'rgb(125,198,129)',
    width: metrics.screenWidth * 0.288,//108
    height: metrics.screenHeight * 0.0599,//40
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  introButton3: {
    width: metrics.screenWidth * 0.288,//108
    height: metrics.screenHeight * 0.0599,//40
    alignItems: 'center',
    justifyContent: 'center'
  },
  introButton3Text: {
    textAlign: 'center',
    fontSize: 13,
    color: 'rgb(255,255,255)',
    alignSelf: 'center',
    fontWeight: "900"
  },
});