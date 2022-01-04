import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import Discover from '../Discover/Discover';
import home from '../home';
import stack from '../More/Navigation/navigation';
import Search from '../Search/Navigation/navigation';

const Tab = createBottomTabNavigator();


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
                component={stack}
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