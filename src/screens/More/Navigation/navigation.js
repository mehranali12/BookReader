import React from 'react';
import { StyleSheet } from 'react-native';
import More from '../More';
import CustomDrawer from '../component/CustomDrawer';
import changePassword from '../../User/changePassword';
import accountSetting from '../../User/accountSetting';
import about from '../../User/about';
import updateProfile from '../../User/updateProfile';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default DrawerFunction = () => (

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        // drawerStyle={styles.drawerStyle}
    //   drawerPosition='right'
    >
        <Drawer.Screen
            name="setting"
            component={stack}
        />

    </Drawer.Navigator>

)


function stack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="changePassword" component={changePassword} />
            <Stack.Screen name="accountSetting" component={accountSetting} />
            <Stack.Screen name="about" component={about} />
            <Stack.Screen name="updateProfile" component={updateProfile} />
            <Stack.Screen name="setting" component={DrawerFunction} />
        </Stack.Navigator>
    )
}