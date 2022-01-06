import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import Header from '../components/header';
import { TextStyle } from '../utils/GlobalStyles';

export default otp = ({ navigation }) => {

    const [input01, setinput01] = useState('');
    const [input02, setinput02] = useState('');
    const [input03, setinput03] = useState('');
    const [input04, setinput04] = useState('');
    const [otp, setOtp] = useState('');
    let input1;
    let input2;
    let input3;
    let input4;

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

                <View style={{
                    elevation: 2,
                    height: 70,
                    width: 70,
                    backgroundColor: COLORS.grayLight,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput
                        ref={input => {
                            input1 = input;
                        }}
                        placeholder='5'
                        keyboardType='numeric'
                        style={[styles.otpText, TextStyle.h1]}
                        maxLength={1}
                        onChangeText={val => {
                            setinput01(val);
                            input2.focus();
                        }}
                    />
                </View>

                <View style={{
                    elevation: 2,
                    height: 70,
                    width: 70,
                    backgroundColor: COLORS.grayLight,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput
                        ref={input => {
                            input2 = input;
                        }}
                        placeholder='5'
                        keyboardType='numeric'
                        style={[styles.otpText, TextStyle.h1]}
                        maxLength={1}
                        onChangeText={val => {
                            setinput02(val);
                            input3.focus();
                        }}
                    />
                </View>

                <View style={{
                    elevation: 2,
                    height: 70,
                    width: 70,
                    backgroundColor: COLORS.grayLight,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput
                        ref={input => {
                            input3 = input;
                        }}
                        placeholder=''
                        keyboardType='numeric'
                        style={[styles.otpText, TextStyle.h1]}
                        maxLength={1}
                        onChangeText={val => {
                            setinput03(val);
                            input4.focus();
                        }}
                    />
                </View>

                <View style={{
                    elevation: 2,
                    height: 70,
                    width: 70,
                    backgroundColor: COLORS.grayLight,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput
                        ref={input => {
                            input4 = input;
                        }}
                        placeholder=''
                        keyboardType='numeric'
                        style={[styles.otpText, TextStyle.h1]}
                        maxLength={1}
                        onChangeText={val => {
                            setinput04(val);
                        }}
                    />
                </View>

            </View>

            <Text style={[styles.allBlaceText, { marginTop: 40, textAlign: 'center' }]}>Didn’t receive the code?</Text>

            <TouchableOpacity>
                <Text style={[styles.allBlaceText, { marginTop: 12, color: COLORS.primary, textAlign: 'center', textDecorationLine: 'underline' }]}>Re-send code</Text>
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
        justifyContent: 'center',
        justifyContent: 'space-evenly',
    },
    otpTopText: {
        fontStyle: 'normal',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.black,
    },
    otpText: {
        borderBottomWidth: 2,
        borderColor: COLORS.gray,
        width: '80%',
        textAlign: 'center',
    },
});