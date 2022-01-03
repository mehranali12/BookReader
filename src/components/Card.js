import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { COLORS } from '../constants/colors';

import { GolbalStyle, TextStyle } from "../utils/GlobalStyles";


export default function Card({ text, icon, navigation }) {
    return (

        <ImageBackground
            source={icon}
            resizeMode="cover"
            style={{ height: 65, width: 91, marginRight:26, marginBottom: 16, }}
        >
            <View style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1, justifyContent: "flex-end", padding: 5, }}>
                <Text style={[Styles.title, TextStyle.h6]}>{text}</Text>
            </View>
        </ImageBackground>

    );
}


const Styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontWeight: '600'

    },
});