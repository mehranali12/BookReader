import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from '../constants/colors';

import { GolbalStyle, TextStyle } from "../utils/GlobalStyles";


export default function Card({ text, icon, navigation }) {
    return (
        <View style={{ width: '31.33%', marginRight: 8, borderRadius: 8 , }}>
            <ImageBackground
                source={icon}
                resizeMode="cover"
                imageStyle={{ borderRadius: 8 }}
                style={{ height: 65, width: '100%', marginRight: 18, marginBottom: 16, }}
            >
                <TouchableOpacity
                onPress={()=> navigation.navigate('result')}
                style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1, justifyContent: "flex-end", padding: 5,borderRadius: 8 }}>
                    <Text style={[Styles.title, TextStyle.h6]}>{text}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    );
}


const Styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontWeight: '600'

    },
});