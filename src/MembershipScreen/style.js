import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(41, 48, 74)',
    paddingHorizontal: metrics.screenWidth * 0.0533,
  },
  closeButton:{
    width: metrics.screenWidth * 0.0853,
    height: metrics.screenWidth * 0.0853,
    alignSelf: 'flex-start',
    marginTop: metrics.screenHeight * 0.0959,
  },
  Textone: {
    textAlign:'center',
    fontSize:40,
    letterSpacing:0.48,
    color:'rgb(255,255,255)',
    fontWeight:"900",
    alignSelf: 'center',
    marginTop: -metrics.screenHeight * 0.025,
  },
  Texttwo: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(255,255,255)',
    fontWeight: "900",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0074,
  },
  PlantImage: {
    width: metrics.screenWidth * 0.1866,
    height: metrics.screenHeight * 0.110,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0374,
  },
  featurViewStyle: {
    flexDirection:'row',
    marginTop: metrics.screenHeight * 0.0179,//12
  },
  featureRightSignImage: {
    width: metrics.screenWidth * 0.064,
    height: metrics.screenWidth * 0.064,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0239,//16
  },
  featureText:{
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(255,255,255)',
    fontWeight: "500",
    alignSelf: 'center',
    marginLeft: metrics.screenWidth * 0.0346,
    marginTop: metrics.screenHeight * 0.0239,//16
  },
  bothPaymentView:{
    flexDirection: 'row',
    marginTop: metrics.screenHeight * 0.0494,//16
  },
  paymentView:{
    width: metrics.screenWidth * 0.4266,
    height: metrics.screenHeight * 0.2143,
    backgroundColor:'rgb(255,255,255)',
    color:'rgb(255,255,255)',
    borderRadius:12.0
  },
  monthlyPaymentClickView: {
    width: metrics.screenWidth * 0.4266,
    height: metrics.screenHeight * 0.2143,
    backgroundColor: 'rgb(60,66,112)',
    color: 'rgb(60,66,112)',
    borderRadius: 12.0
  },
  paymentAnnualView: {
    width: metrics.screenWidth * 0.4266,
    height: metrics.screenHeight * 0.2143,
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(255,255,255)',
    borderRadius: 12.0,
    marginLeft: metrics.screenWidth * 0.04,
  },
  paymentAnnualClickView: {
    width: metrics.screenWidth * 0.4266,
    height: metrics.screenHeight * 0.2143,
    backgroundColor: 'rgb(60,66,112)',
    color: 'rgb(60,66,112)',
    borderRadius: 12.0,
    marginLeft: metrics.screenWidth * 0.04,
  },
  paymentFirstText:{
    textAlign:'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(32,36,47)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0224,//15
  },
  paymentFirstTextClick: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(255,255,255)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0224,//15
  },
  paymentFirstAnnualText: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(32,36,47)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: - metrics.screenHeight * 0.0374,//25
  },
  paymentFirstAnnualTextClick: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.3,
    color: 'rgb(255,255,255)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: - metrics.screenHeight * 0.0374,//25
  },
  paymentDollarText: {
    fontSize: 15,
    letterSpacing: 0.0,
    color: 'rgb(32,36,47)',
    fontWeight: "700",
    alignSelf: 'center',
    marginRight: metrics.screenHeight * 0.091,
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  paymentDollarTextClick: {
    fontSize: 15,
    letterSpacing: 0.0,
    color: 'rgb(255,255,255)',
    fontWeight: "700",
    alignSelf: 'center',
    marginRight: metrics.screenHeight * 0.091,
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  paymentPriceText: {
    textAlign: 'center',
    fontSize: 29,
    letterSpacing: 0.0,
    color: 'rgb(32,36,47)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: - metrics.screenHeight * 0.0199,
  },
  paymentPriceTextClick: {
    textAlign: 'center',
    fontSize: 29,
    letterSpacing: 0.0,
    color: 'rgb(255,255,255)',
    fontWeight: "700",
    alignSelf: 'center',
    marginTop: - metrics.screenHeight * 0.0199,
  },
  paymentConditionText: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.0,
    color: 'rgb(116,125,149)',
    fontWeight: "500",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  paymentConditionTextClick: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.0,
    color: 'rgb(255,255,255)',
    fontWeight: "500",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0149,//10
  },
  paymentBilledText: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.26,
    color: 'rgb(116,125,149)',
    fontWeight: "500",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0179,//12
  },
  paymentBilledTextClick: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.26,
    color: 'rgb(255,255,255)',
    fontWeight: "500",
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.0179,//12
  },
  bestDealImage:{
    width: metrics.screenWidth * 0.1333,//50
    height: metrics.screenWidth * 0.1333,//50
    alignSelf: 'flex-end',
  },
  signUpButtonView: {
    backgroundColor: 'rgb(125,198,129)',
    width: metrics.screenWidth * 0.893,
    height: metrics.screenHeight * 0.082,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: metrics.screenHeight * 0.0449,//30
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
    opacity: 0.96,
    alignSelf: 'center',
    letterSpacing: 0.3,
    fontWeight: "900"
  },
});