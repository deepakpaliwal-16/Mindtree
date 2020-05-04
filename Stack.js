import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from './App'

const screens = createStackNavigator({
  first: {
    screen: App,
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