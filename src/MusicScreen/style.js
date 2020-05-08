import metrics from '../themes/metrics'
import { StyleSheet, Dimensions, } from 'react-native'
import colors from '../themes/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.musicBgGrey
  },
  ImageCloseTree: {
    width: metrics.screenWidth * 0.112,//42
    height: metrics.screenWidth * 0.112,//42
  },
  ImageCloseBackTree: {
    width: metrics.screenWidth * 0.112,//42
    height: metrics.screenHeight * 0.0629,//42
    marginRight: metrics.screenWidth * 0.085,
    alignSelf: 'flex-end',
    marginTop: metrics.screenHeight * 0.0749,
  },
  ImageBackgroundView: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.8065,//538
    marginTop: - metrics.screenHeight * 0.0374,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  play: {
    width: metrics.screenWidth * 0.1066,//40
    height: metrics.screenWidth * 0.1066,//40
    alignSelf: 'center',
  },
  playText:{
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: colors.white,
    fontWeight: '700',
    marginTop: metrics.screenHeight * 0.1049,//70
  },
  timeView:{
    width: metrics.screenWidth * 0.24,//90
    height: metrics.screenHeight * 0.0674,//45
    backgroundColor: colors.whiteWithOp,
    borderRadius:10,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop: metrics.screenHeight * 0.1049,//70
  },
  timeText:{
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
    fontWeight: '700',
  }
});