import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../constants';
import { GolbalStyle,  TextStyle } from "../utils/GlobalStyles";

export default TextButton = ({ text, onPress, icon, style }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={[GolbalStyle.loginButton, style]} >
                {icon ? (
                    <Image source={icon}
                        style={{ height: 20, width: 10,}} />

                ) : null}

                <Text style={[style, TextStyle.h3,
                    { fontStyle: 'normal', fontFamily: FONTS.Regular, paddingLeft: icon ? 45 : 0, }]}>
                    {text}</Text>
            </TouchableOpacity>
        </View>
    )
}
