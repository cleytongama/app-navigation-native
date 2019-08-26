import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import {
    Home,
    Details,
    Profile,
    Settings,
    Modal
} from './screens'

import Ionicons from 'react-native-vector-icons/Ionicons'

// Stack Navigation Home
const HomeStack = createStackNavigator({
    Home,
    Details
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        },
        navigationOptions: {
            tabBarLabel: 'Home',
        }
    }
);

const RootHome = createStackNavigator(
    {
        HomeStack,
        Modal
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
)

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
    // RootStack,
    createBottomTabNavigator({
        Home: RootHome,
        Settings: SettingsStack
    }, {
            tabBarOptions: {
                labelStyle: {
                    fontSize: 16
                },
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#000',
                style: {
                    backgroundColor: '#f4511e'
                },
                showLabel: false
            },
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({focused, horizontal, tintColor}) => {

                }
            })
        }
    )
)

// Na tela do feed , as abas da aplicacao
// Navegacao em abas usando o createBottonTabNavigation
// Cada tabNavigation possui sua pilha de navegacao
export default Routes