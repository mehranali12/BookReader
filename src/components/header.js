import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';

export default function Header({ icon, title, text, style, }) {
    const navigation = useNavigation();
    return (
        <View style={Styles.header}>
            {icon ? (
                <TouchableOpacity
                    style={{ paddingLeft: 16 }}
                    onPress={() => navigation.goBack()}>
                    <Image source={icon}
                        style={{ height: 15, width: 8, marginRight: 15, }}
                    />
                </TouchableOpacity>

            ) : null}
            <View style={[style, { flexDirection: 'row', }]}>
                <Text style={[Styles.title, TextStyle.h4, style]}>{title}</Text>
                <Text style={[Styles.title, TextStyle.h4, style, { paddingLeft: '60%' }]}>{text}</Text>
            </View>
        </View>
    );
}


const Styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: COLORS.white,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontStyle: 'normal',
        color: COLORS.primary,
        paddingLeft: 20,
    },
});