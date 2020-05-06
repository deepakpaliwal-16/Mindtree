import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import styles from './style';
import Images from '../themes/images'
import ButtonComponent from '../Component/button'
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
        <TouchableOpacity
          onPress={this._onPressButton1}
        >
        <Text style={styles.paymentFirstText}>Monthly</Text>
        <Text style={styles.paymentDollarText}>$</Text>
        <Text style={styles.paymentPriceText}>9.90</Text>
        <Text style={styles.paymentConditionText}>per month</Text>
        <Text style={styles.paymentBilledText}>billed monthly</Text>
        </TouchableOpacity>
      </View>
    );
  }
  monthlyPaymentClickView = () => {
    return (
      <View style={styles.monthlyPaymentClickView}>
        <TouchableOpacity
          onPress={this._onPressButton1}
        >
          <Text style={styles.paymentFirstTextClick}>Monthly</Text>
          <Text style={styles.paymentDollarTextClick}>$</Text>
          <Text style={styles.paymentPriceTextClick}>9.90</Text>
          <Text style={styles.paymentConditionTextClick}>per month</Text>
          <Text style={styles.paymentBilledTextClick}>billed monthly</Text>
      </TouchableOpacity>
      </View>
    );
  }
  AnnualPaymentView = () => {
    return (
      <View style={styles.paymentAnnualView}>
        <TouchableOpacity
          onPress={this._onPressButton}
        >
        <Image source={Images.bestDeal} resizeMode={'contain'} style={styles.bestDealImage} />
        <Text style={styles.paymentFirstAnnualText}>Annualy</Text>
        <Text style={styles.paymentDollarText}>$</Text>
        <Text style={styles.paymentPriceText}>8.00</Text>
        <Text style={styles.paymentConditionText}>per month</Text>
        <Text style={styles.paymentBilledText}>billed yearly at $96</Text>
        </TouchableOpacity>
      </View>

    );
  }
  AnnualPaymentClickView = () => {
    return (
      <View style={styles.paymentAnnualClickView}>
        <TouchableOpacity
          onPress={this._onPressButton}
        >
          <Image source={Images.bestDeal} resizeMode={'contain'} style={styles.bestDealImage} />
          <Text style={styles.paymentFirstAnnualTextClick}>Annualy</Text>
          <Text style={styles.paymentDollarTextClick}>$</Text>
          <Text style={styles.paymentPriceTextClick}>8.00</Text>
          <Text style={styles.paymentConditionTextClick}>per month</Text>
          <Text style={styles.paymentBilledTextClick}>billed yearly at $96</Text>
        </TouchableOpacity>
      </View>

    );
  }
  constructor(props) {
    super(props);
    this.state = {count: 0,count1:0 };
   
  }

  _onPressButton = () => {
    if (this.state.count == 0) {
      this.setState({
        count: 1,
        count1:0
      })
    }
    else {
      this.setState({
        count: 0
      })
    }
  }
  _onPressButton1 = () => {
    if (this.state.count1 == 0) {
      this.setState({
        count1: 1,
        count:0
      })
    }
    else {
      this.setState({
        count1: 0
      })
    }
  }
render(){
  return(
    <View style={styles.container}>
      <StatusBar  
      backgroundColor="blue"
      barStyle="light-content" />
      <Image source={Images.close} resizeMode={'contain'} style={styles.closeButton} />
      <Text style={styles.Textone}>mindtree</Text>
      <Text style={styles.Texttwo}>7-DAYS FREE TRIAL</Text>
      <Image source={Images.memberShipPlant} resizeMode={'contain'} style={styles.PlantImage} />
      {this.featureView("Real trees planted as you meditate")}
      {this.featureView("Guided exercices that makes life easier")}
      {this.featureView("Real trees planted as you meditate")}
      
      <View style={styles.bothPaymentView}>
        {this.state.count1 == 0 ? this.monthlyPaymentView() : this.monthlyPaymentClickView()}
        {this.state.count == 0 ? this.AnnualPaymentView() : this.AnnualPaymentClickView() }
      </View>
      <ButtonComponent
        title='Start Your Free Trial'
        style1={styles.signUpButtonView}
        style={styles.fbButton}
        textStyles={styles.fbButtonText}
        onPress={() => this.props.navigation.navigate('fifth')}
      />
    </View>
  );
}
}