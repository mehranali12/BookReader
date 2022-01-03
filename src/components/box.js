import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';
import { TextInput } from 'react-native-gesture-handler';
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';


export default box = ({ navigation, placeholder, }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

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
                    placeholder='5'
                    keyboardType='numeric'
                    style={[styles.otpText, TextStyle.h1]}
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otpText: {
        borderBottomWidth: 2,
        borderColor: COLORS.gray,
        width: '80%',
        textAlign: 'center',
    },
});