import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AccountScreen from './account'
const AccountStack = createStackNavigator({
  Account: { screen: AccountScreen },
},
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Account',
      //Header title
    },
  }
)
export default createAppContainer(
  AccountStack
)