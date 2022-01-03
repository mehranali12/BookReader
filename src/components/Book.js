import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle, TextStyle } from "../utils/GlobalStyles";


export default function Book({ text, subText, icon, navigation }) {
    return (

        <ImageBackground
            source={icon}
            resizeMode="cover"
            style={{ width: 300, height: 180, marginRight: 16 }}
        >
            <View style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1, justifyContent: "flex-end" ,  paddingLeft: 14,}}>
                <Text style={[Styles.title, TextStyle.h4]}>{text}</Text>
                <Text style={[Styles.title, TextStyle.h4 , {paddingBottom:5}]}>{subText}</Text>
            </View>

        </ImageBackground>

    );
}


const Styles = StyleSheet.create({
    title: {
        color: COLORS.white,
       
    },
});