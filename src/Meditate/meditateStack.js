import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MeditateScreen from './meditate'
const MeditateStack = createStackNavigator({
  Meditate: { screen: MeditateScreen,
    navigationOptions: {
      header: null,
    }
   },
},
  {
    defaultNavigationOptions: {
      title: 'Meditate',
    },
  }
)
export default createAppContainer(
  MeditateStack
)