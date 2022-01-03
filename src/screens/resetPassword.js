import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';


export default resetPassword = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='Reset Password'
                icon={require('../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 50, }}>
                <Text>Reset Password for you@email.com</Text>
            </View>

            <View style={{ marginTop: 40, }}>
                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="New Password"
                />

                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Confirm Password"
                />
            </View>

            <View style={{ marginTop: 30, }} />
            <View style={[styles.primaryButton, { backgroundColor: COLORS.primary, }]}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Submit'
                // onPress={() => navigation.navigate('otp')}
                />
            </View>

            <View style={[styles.primaryButton, { backgroundColor: COLORS.grayDark, marginTop: 16, }]}>
                <TextButton
                    style={{ color: COLORS.black, }}
                    text='Cancle'
                // onPress={() => navigation.navigate('home')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    forgetpassoerd: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        lineHeight: 18,
        fontStyle: 'normal',
        textAlign: 'center',
    },
    allBlaceText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: FONTS.medium,
        paddingLeft: 32,
    },
    primaryButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        fontFamily: FONTS.Regular,
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        paddingRight: 30,
        height: 46,
    }
});