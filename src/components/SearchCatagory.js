import React from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { TextStyle } from '../utils/GlobalStyles';

export default function SearchCatagory({ text, icon, navigation }) {
    return (
        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: COLORS.gray, flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>

            <Text style={[TextStyle.h5, { fontWeight: 'bold' }]}>{text}</Text>
            <Image source={icon}
                resizeMode='contain'
                style={{ height: 15, width: 8, }}
            />

        </TouchableOpacity>
    );
}