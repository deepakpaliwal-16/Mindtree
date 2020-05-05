import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import Images from '../themes/images'

export default class MemberShip extends Component {
  featureView = (text) => {
    return (
      <View style={styles.featurViewStyle}> 
        <Image source={Images.rightSign} resizeMode={'contain'} style={styles.featureRightSignImage} />
        <Text style={styles.featureText}>{text}</Text>
      </View>
    );
  }
  monthlyPaymentView = () => {
    return (
      <View style={styles.paymentView}>
        <Text style={styles.paymentFirstText}>Monthly</Text>
        <Text style={styles.paymentDollarText}>$</Text>
        <Text style={styles.paymentPriceText}>9.90</Text>
        <Text style={styles.paymentConditionText}>per month</Text>
        <Text style={styles.paymentBilledText}>billed monthly</Text>
      </View>
    );
  }
  AnnualPaymentView = () => {
    return (
      <View style={styles.paymentAnnualView}>
        {/* <Image source={Images.bestDeal} resizeMode={'stretch'} style={styles.bestDealImage} /> */}
        <Text style={styles.paymentFirstAnnualText}>Annual</Text>
        <Text style={styles.paymentDollarText}>$</Text>
        <Text style={styles.paymentPriceText}>8.00</Text>
        <Text style={styles.paymentConditionText}>per month</Text>
        <Text style={styles.paymentBilledText}>billed yearly at $96</Text>
      </View>
    );
  }
render(){
  return(
    <View style={styles.container}>
      <Image source={Images.close} resizeMode={'contain'} style={styles.closeButton} />
      <Text style={styles.Textone}>mindtree</Text>
      <Text style={styles.Texttwo}>7-days free trial</Text>
      <Image source={Images.memberShipPlant} resizeMode={'contain'} style={styles.PlantImage} />
      {this.featureView("Real trees planted as you meditate")}
      {this.featureView("Guided exercices that makes life easier")}
      {this.featureView("Real trees planted as you meditate")}
      
      <View style={styles.bothPaymentView}>
        {this.monthlyPaymentView()}
        {this.AnnualPaymentView()}
      </View>
    </View>
  );
}
}