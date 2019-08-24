import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home'
import Details from './screens/Details'
import Profile from './screens/Profile'
import Settings from './screens/Settings'

// Stack Navigation Home
const HomeStack = createStackNavigator({
    Home,
    Details
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        }
    }
);

// Stack Navigation Settings
const SettingsStack = createStackNavigator({
    Settings,
    Profile
},
    {
        initialRouteName: 'Settings'
    }
)

const Routes = createAppContainer(
    createBottomTabNavigator({
        Home:HomeStack,
        Settings:SettingsStack
    })
)

export default Routes