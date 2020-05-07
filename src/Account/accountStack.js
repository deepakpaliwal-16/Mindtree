import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AccountScreen from './account'
const AccountStack = createStackNavigator({
  Account: { screen: AccountScreen ,
    navigationOptions: {
      header: null,
    }
  },
},
  {
    defaultNavigationOptions: {
      title: 'Account',
    },
  }
)
export default createAppContainer(
  AccountStack
)