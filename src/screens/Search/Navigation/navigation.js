import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import search from '../Search'
import result from '../catResult'
const Stack = createStackNavigator();


export default function searchst() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='searchsrc'
                component={search}
            />
            <Stack.Screen
                name='result'
                component={result}
            />
        </Stack.Navigator>
    )
}

