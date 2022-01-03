import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';
import Box from '../components/box';


export default otp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='OTP'
                icon={require('../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 70, }}>
                <Text style={[styles.otpTopText, { fontSize: 20, lineHeight: 22, fontFamily: FONTS.SemiBold, }]}>Enter your verification code</Text>
            </View>


            <View style={{ alignItems: 'center', marginTop: 24, }}>
                <Text style={[styles.otpTopText, { fontSize: 14, lineHeight: 18, fontFamily: FONTS.Regular, }]}>
                    Enter the 4-digit code we have sent to
                </Text>
                <Text style={[styles.otpTopText, { fontSize: 14, lineHeight: 18, fontFamily: FONTS.Regular, }]}>example@gmail.com</Text>
            </View>

            
            <View style={styles.otpBoxes}>
                <Box />
                <Box />
                <Box />
                <Box />
            </View>

            <Text style={[styles.allBlaceText, {marginTop: 40,  textAlign: 'center'}]}>Didn’t receive the code?</Text>

            <TouchableOpacity>
            <Text style={[styles.allBlaceText, {marginTop: 12, color: COLORS.primary, textAlign: 'center', textDecorationLine: 'underline'}]}>Re-send code</Text>
            </TouchableOpacity>

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
    otpBoxes: {
        width: '100%',
        height: 70,
        marginTop: 50,
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    otpTopText: {
        fontStyle: 'normal',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.black,
    },
});