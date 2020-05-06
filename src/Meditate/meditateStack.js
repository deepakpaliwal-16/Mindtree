import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MeditateScreen from './meditate'
const MeditateStack = createStackNavigator({
  Meditate: { screen: MeditateScreen },
},
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Meditate',
      //Header title
    },
  }
)
export default createAppContainer(
  MeditateStack
)