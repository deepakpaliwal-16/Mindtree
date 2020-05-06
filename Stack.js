import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from './src/IntroScreen/App';
import SignUp from './src/SignUp/signUp';
import Login from './src/Login/login';
import MemberShip from './src/MembershipScreen/membership';
import BottomNav from './src/BottomNavigation/bottomNav'
const screens = createStackNavigator({
  first: {
    screen: App,
    navigationOptions: {
      header: null,
    }
  },
  second: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    }
  },
  third: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  fourth: {
    screen: MemberShip,
    navigationOptions: {
      header: null,
    }
  },
  fifth: {
    screen: BottomNav,
    navigationOptions: {
      header: null,
    }
  },
},
  {
    initialRouteName: 'first'
  })
export default createAppContainer(
  screens
)