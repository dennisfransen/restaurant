import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchScreen from '../screens/SearchScreen'
import RestaurantsShowScreen from '../screens/RestaurantsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantsShow: RestaurantsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
})

export default createAppContainer(navigator)