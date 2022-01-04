import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import TextInputField from '../../components/TextInputField';
import TextButton from '../../components/TextButton';


const CustomDrawer = ({ props, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                title='Password'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 60, }}>
                <Text style={[TextStyle.h5, { fontWeight: '500' }]}>Change Password</Text>
            </View>

            <View style={{ marginTop: 40, }}>
                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Current Password"
                />

                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="New Password"
                />

                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Confirm Password"
                />
            </View>

            <View style={{ marginHorizontal: 24, marginTop: 24 }}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Reset Paswword'
                    bgcolor={COLORS.primary}
                // onPress={() => navigation.navigate('otp')}
                />
            </View>

            <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                <TextButton
                    style={{ color: COLORS.black, }}
                    text='Cancle'
                    bgcolor={COLORS.grayDark}
                />
            </View>


        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({

});