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
    fontWeight: '900'
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
  SwitchButton: {
    marginTop: metrics.screenHeight * 0.0449,
    alignSelf:'center',
    marginBottom: metrics.screenHeight * 0.0149,
  },
  HomefirstModalView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  ImageGirlBackgroundView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    paddingHorizontal: metrics.screenWidth * 0.0666,//25
  },
  FirstModalView: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.2998,//200
    marginTop: metrics.screenHeight * 0.209,//140
    flexDirection: 'row'
  },
  FirstModalDayText: {
    alignSelf: 'flex-start',
    fontSize: 13,
    letterSpacing: 0.16,
    color: 'rgb(41,48,74)',
    fontWeight: '700',
  },
 SecondModalDayText: {
    alignSelf: 'flex-start',
    fontSize: 13,
    letterSpacing: 0.16,
    color: 'rgb(255,255,255)',
    fontWeight: '700',
  },
  FirstModalDetailText: {
    alignSelf: 'flex-start',
    fontSize: 17,
    letterSpacing: 0.2,
    color: 'rgb(41,48,74)',
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  SecondModalDetailText: {
    alignSelf: 'flex-start',
    fontSize: 17,
    letterSpacing: 0.2,
    color: 'rgb(255,255,255)',
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0074,//5
  },
  firstModalImage: {
    width: metrics.screenWidth * 0.0933,//35
    height: metrics.screenWidth * 0.0933,//35
    marginLeft: metrics.screenWidth * 0.256,//96
  },
  ImageUnlockBackgroundCloud: {
    width: metrics.screenWidth * 0.8933,//335
    height: metrics.screenHeight * 0.1124,//75
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop: metrics.screenHeight * 0.0299,//20
    marginBottom: metrics.screenHeight * 0.0149,//10
  },
  UnlockText:{
    fontSize: 20,
    letterSpacing: 0.4,
    opacity:0.96,
    color: 'rgb(255,255,255)',
    fontWeight: '900',
  },
});