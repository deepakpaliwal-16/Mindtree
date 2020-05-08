import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import colors from '../themes/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenbtnTheme
  },
  containerView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.1799,
    backgroundColor: colors.greenbtnTheme,
    marginTop: metrics.screenHeight * 0.074,
  },
  ImageBackgroundView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.1799,
  },
  ImageHeaderTree:{
    width: metrics.screenWidth*0.1066,
    height: metrics.screenWidth * 0.1066,
    marginRight: metrics.screenWidth * 0.08,
    alignSelf:'flex-end'
  },
  welComeText:{
  textAlign:'center',
  alignSelf:'center',
  fontSize:17,
  letterSpacing:0.2,
  color:colors.grey01,
  fontWeight:'900',
  marginTop: - metrics.screenHeight * 0.025,//16.67
  },
  NameText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 27,
    letterSpacing: 0.32,
    color: colors.white,
    fontWeight: '900'
  },
  containerModalView:{
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.674,
    color:colors.white,
    backgroundColor:colors.white,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal: metrics.screenWidth*0.05333,
  },
  modalStartText: {
    alignSelf: 'flex-start',
    fontSize: 21,
    letterSpacing: 0.25,
    lineHeight:28.5,
    color: colors.blueBgTheme,
    fontWeight: '900',
    marginLeft: metrics.screenWidth * 0.0266,//10
    marginTop: metrics.screenHeight * 0.044,//30
  },
  HomefirstModalView:{
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  ImageGirlBackgroundView: {
    width: metrics.screenWidth*0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    paddingHorizontal: metrics.screenWidth * 0.0666,//25
  },
  FirstModalView:{
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    marginTop: metrics.screenHeight * 0.209,//140
    flexDirection:'row'
  },
  FirstModalDayText:{
    alignSelf: 'flex-start',
    fontSize: 13,
    letterSpacing: 0.16,
    color: colors.white,
    fontWeight: '700',
  },
  FirstModalDetailText: {
    alignSelf: 'flex-start',
    fontSize: 17,
    letterSpacing: 0.2,
    color: colors.white,
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  firstModalImage:{
    width: metrics.screenWidth * 0.0933,//35
    height: metrics.screenWidth * 0.0933,//35
    marginLeft: metrics.screenWidth * 0.1173,//44
  },
  ImageModal2BackgroundView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.1499,//100
    paddingHorizontal: metrics.screenWidth * 0.0666,//25
    marginTop: metrics.screenHeight * 0.0299,//20
  },
  SecondModalView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.1499,//100
    marginTop: metrics.screenHeight * 0.0524,//35
    flexDirection: 'row'
  },
  SecondModalDailyText:{
    alignSelf: 'flex-start',
    fontSize: 13,
    letterSpacing: 0.16,
    color: colors.blueBgTheme,
    fontWeight: '700',
  },
  secondModalImage: {
    width: metrics.screenWidth * 0.0933,//35
    height: metrics.screenWidth * 0.0933,//35
    marginLeft: metrics.screenWidth * 0.194,//73
  },
  ThirdBackgroundView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.1499,//100
    paddingHorizontal: metrics.screenWidth * 0.0666,//25
    borderRadius:12,
    backgroundColor:colors.blueBgTheme,
    marginTop: metrics.screenHeight * 0.0299,//20
    marginBottom: metrics.screenHeight * 0.0299,//20
  },
  ThirdModalView: {
    marginTop: metrics.screenHeight * 0.0299,//20
    flexDirection: 'row'
  },
ThirModalGrowthText: {
    alignSelf: 'flex-start',
    fontSize: 13,
    letterSpacing: 0.16,
  color: colors.greenbtnTheme,
    fontWeight: '700',
  },
  ThirdModalImage: {
    width: metrics.screenWidth * 0.168,//35
    height: metrics.screenHeight * 0.0899,//35
    marginLeft: metrics.screenWidth * 0.194,//73
  },
  ThirdModalRow:{
    alignSelf:'center'
  }
});