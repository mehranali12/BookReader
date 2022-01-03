import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
const Tab = createBottomTabNavigator();
import { COLORS } from '../../constants/colors'
import home from '../home';
import Discover from '../Discover/Discover';
import Search from '../Search/Search';
import More from '../More/More';


export default function tab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: COLORS.primary,
                inactiveTintColor: '#1E1E1E',
            }}
        >
            <Tab.Screen
                name="home"
                component={home}
                options={{
                    // tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 18, height: 18, tintColor: color }}
                            source={require('../../assets/icons/home.png')}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    // tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 18, height: 18, tintColor: color }}
                            source={require('../../assets/icons/discover.png')}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    // tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 18, height: 18, tintColor: color }}
                            source={require('../../assets/icons/search.png')}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="More"
                component={More}
                options={{
                    // tabBarVisible: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 18, height: 18, tintColor: color }}
                            source={require('../../assets/icons/level.png')}
                        />
                    )
                }}
            />



        </Tab.Navigator>
    )
}