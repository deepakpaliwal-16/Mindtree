import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 251, 255)'
  },
  SignUpText: {
    color: 'rgb(41, 48, 74)',
    fontSize:20,
    textAlign:'center',
    alignSelf:'center',
    letterSpacing:0.24,
    fontWeight:'900',
    marginTop:metrics.screenHeight*0.119
  },
  OrText: {
    color: 'rgb(41, 48, 74)',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 0.24,
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0374,
    marginBottom: metrics.screenHeight * 0.007496,
  },
  fbButtonView: {
    backgroundColor: 'rgb(77,100,183)',
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0449,
  },
  signUpButtonView: {
    backgroundColor: 'rgb(41,78,74)',
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0449,
  },
  gmailButtonView: {
    backgroundColor: 'rgb(255,255,255)',
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0224,
  },
  fbButton: {
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fbButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(255,255,255)',
    opacity:0.96,
    alignSelf: 'center',
    letterSpacing:0.18,
    fontWeight: "900"
  },
  gmailButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(41,48,74)',
    alignSelf: 'center',
    letterSpacing: 0.18,
    fontWeight: "900"
  },
  fbImage:{
    width: metrics.screenWidth * 0.064,
    height: metrics.screenWidth * 0.064,
    alignSelf: 'center',
    marginRight: metrics.screenHeight * 0.04,
  },
  inputs: {
    alignSelf: 'center',
    // height: height * 0.05, //46
    width: metrics.screenWidth * 0.893, //310,
    // fontFamily: Fonts.AvenirNextRegular,
    fontSize: metrics.screenWidth * 0.04, //15,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 12,
    letterSpacing:0.28,
    fontWeight:'500',
    // position: 'absolute',
    // bottom: 20, //53,
    marginVertical: 20,
    paddingHorizontal: metrics.screenWidth * 0.05, //22
    paddingVertical: metrics.screenHeight * 0.020, // 10
    color: 'rgb(116,125,149)',
    maxHeight: metrics.screenHeight * 0.082

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
    color: 'rgb(125,198,129)',
    alignSelf: 'center',
    fontWeight: "700",
    marginTop: metrics.screenHeight * 0.0149,
  },
  intro32HorizontalText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(153,162,178)',
    alignSelf: 'center',
    fontWeight: "700",
    marginTop: metrics.screenHeight * 0.0149,
  },
  bottomImageNav:{
    width: metrics.screenWidth * 0.0533,//20
    height: metrics.screenWidth * 0.0533,//20
  }
});