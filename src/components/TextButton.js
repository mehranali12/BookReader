import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FONTS } from '../constants';
import { GolbalStyle, TextStyle } from "../utils/GlobalStyles";

export default TextButton = ({ text, icon, bgcolor, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 46,
                backgroundColor: bgcolor ? bgcolor : "red",
                borderRadius: 30,
                alignItems: "center",
                flexDirection: "row",
                borderWidth: bgcolor == 'rgba(0,0,0,0.4)' ? 1 : 0,
                borderColor: '#fff'

            }}>
            {icon ? (
                <View style={{ paddingLeft: 24 }}>
                    <Image
                        resizeMode='contain'
                        source={icon}
                        style={{ height: 20, width: 20, }} />
                </View>

            ) : null}
            <View style={{ flex: 1, marginLeft: icon ? -24 : 0 }}>
                <Text style={[
                    TextStyle.h3,
                    {
                        fontStyle: 'normal',
                        fontFamily: FONTS.Regular,
                        color: '#fff',
                        textAlign: "center"
                    }]}>
                    {text}</Text>
            </View>

        </TouchableOpacity>

    )
}
