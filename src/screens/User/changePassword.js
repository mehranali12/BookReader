import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import TextInputField from '../../components/TextInputField';
import TextButton from '../../components/TextButton';


const changePassword = ({ props, navigation }) => {
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

            <View style={{ marginTop: 50, marginHorizontal: 24, }}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Reset Paswword'
                    bgcolor={COLORS.primary}
                />
            </View>

            <View style={{ marginTop: 24, marginHorizontal: 24, }}>
                <TextButton
                    style={{ color: COLORS.black, }}
                    text='Cancel'
                    bgcolor={COLORS.grayDark}
                />
            </View>


        </View>
    );
};

export default changePassword;

const styles = StyleSheet.create({

});