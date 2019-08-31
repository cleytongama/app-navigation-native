import React from 'react'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

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
        }
    }
);
// MainHome
const MainHome = createStackNavigator(
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
        initialRouteName: 'Profile'
    }
)

const TabBarNavigation  =  createBottomTabNavigator(
    {
        Home: {
            screen: MainHome,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={25} color={tintColor} />
            },

        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-person" size={25} color={tintColor} />
            },

        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }
        })
    }
)

const DraweNavigation = createDrawerNavigator({
    "HOME":TabBarNavigation,
    "Perfil": Profile,
    "Configurações": Settings
})

const Routes = createAppContainer(DraweNavigation)

// Na tela do feed , as abas da aplicacao
// Navegacao em abas usando o createBottonTabNavigation
// Cada tabNavigation possui sua pilha de navegacao
export default Routes