import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import colors from '../themes/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitelight
  },
  SignUpText: {
    color: colors.blueBgTheme,
    fontSize:20,
    textAlign:'center',
    alignSelf:'center',
    letterSpacing:0.24,
    fontWeight:'900',
    marginTop:metrics.screenHeight*0.119
  },
  OrText: {
    color: colors.blueBgTheme,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 0.24,
    fontWeight: '900',
    marginTop: metrics.screenHeight * 0.0374,
    marginBottom: metrics.screenHeight * 0.007496,
  },
  fbButtonView: {
    backgroundColor: colors.fbblue,
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0449,
  },
  signUpButtonView: {
    backgroundColor: colors.blueBgTheme,
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0449,
  },
  gmailButtonView: {
    backgroundColor: colors.white,
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
    color: colors.white,
    opacity:0.96,
    alignSelf: 'center',
    letterSpacing:0.18,
    fontWeight: "900"
  },
  gmailButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.blueBgTheme,
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
    width: metrics.screenWidth * 0.893, //310,
    fontSize: metrics.screenWidth * 0.04, //15,
    backgroundColor: colors.white,
    borderRadius: 12,
    letterSpacing:0.28,
    fontWeight:'500',
    marginVertical: 20,
    paddingHorizontal: metrics.screenWidth * 0.05, //22
    paddingVertical: metrics.screenHeight * 0.020, // 10
    color: colors.grey03,
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
  bottomImageNav:{
    width: metrics.screenWidth * 0.0533,//20
    height: metrics.screenWidth * 0.0533,//20
  }
});