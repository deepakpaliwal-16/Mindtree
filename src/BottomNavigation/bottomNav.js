import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, Image, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeStack from '../Home/homeStack'
import MeditateStack from '../Meditate/meditateStack'
import AccountStack from '../Account/accountStack'
import Images from '../themes/images'
import styles from '../SignUp/style'
const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Meditate: { screen: MeditateStack },
    Account: { screen: AccountStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let source;
        if (routeName === 'Home') {
          source = focused ? Images.mediActive : Images.mediInActive;
        } else if (routeName === 'Meditate') {
          source = focused ? Images.homeActive : Images.homeInActive;
        } else if (routeName === 'Account') {
          source = focused ? Images.accountActive : Images.accountInActive;
        }
        return <Image resizeMode='contain' source={source} style={styles.bottomImageNav} />;
      },
    }),
    initialRouteName: 'Home',
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.21)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        justifyContent: 'center',
      },
    },
  }
);
export default createAppContainer(BottomNav);