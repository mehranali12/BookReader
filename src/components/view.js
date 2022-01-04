import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { TextStyle } from "../utils/GlobalStyles";


export default function view({ authname, icon, title, text, date, icon2, navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('reading')}
            style={Styles.view}>
            <View style={{width:'70%'}}>
                <Text style={[Styles.title, TextStyle.h5]}>{authname}</Text>
                <Text style={[Styles.title, TextStyle.h5, { fontFamily: FONTS.SemiBold, }]}>{title}</Text>
                <Text style={[Styles.title, TextStyle.h5]}>{text}</Text>

                <View style={{ flexDirection: 'row', paddingTop: 10, }}>
                    <Text style={[Styles.title, TextStyle.h4, { color: COLORS.grayDark, }]}>{date}</Text>
                    <Image source={icon2}
                        style={{ height: 13, width: 13, marginLeft: 5, }}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('reading')}>
                <Image source={icon}
                    style={{ height: 88, width: 73, }}
                />
            </TouchableOpacity>

        </TouchableOpacity>
    );
}


const Styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderWidth: 2,
        marginHorizontal: 12,
        borderColor: COLORS.grayDark,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 8,
        marginTop: 12,
        flexWrap:"wrap"
    },
    title: {
        fontStyle: 'normal',
        color: COLORS.black,
        paddingLeft: 20,
    },
});