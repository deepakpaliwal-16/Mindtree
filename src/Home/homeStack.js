import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './home'
import CourseDetail from '../CourseDetail/courseDetail'
import Music from '../MusicScreen/music'
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  detailCourse: {
    screen: CourseDetail,
    navigationOptions: {
      header: null,
    }
  },
  musicCourse: {
    screen: Music,
    navigationOptions: {
      header: null,
    }
  },
},
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      // headerStyle: {
      //   backgroundColor: '#42f44b',
      // },
      // headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
)
export default createAppContainer(
  HomeStack
)