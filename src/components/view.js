import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { TextStyle } from "../utils/GlobalStyles";


export default function view({ authname, icon, title, text, date, icon2, navigation }) {
    return (
        <View style={Styles.maincontainer}>

            <View style={Styles.view}>
                <View>
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
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate('reading')}>
                        <Image source={icon}
                            style={{ height: 88, width: 73, }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}


const Styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderBottomWidth: 2,
        borderColor: COLORS.grayDark,
        paddingTop: 30,
        paddingBottom: 25,
    },
    title: {
        fontStyle: 'normal',
        color: COLORS.black,
        paddingLeft: 20,
    },
});