import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import TextButton from '../../components/TextButton';

export default function about() {
    return (
        <View style={{ flex: 1, }}>
            <Header
                title='About'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white, }}>
                <Image source={require('../../assets/icons/splish.png')}
                    style={{ width: 125, height: 113, }} />

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[TextStyle.h6, { fontWeight: '500', marginTop: 20, }]}>@ 2022-2023</Text>
                    <Text style={[TextStyle.h6, { fontWeight: '500',  marginTop: 20, paddingLeft: 2, textDecorationLine: 'underline' }]}>Gemnine Technologies</Text>
                </View>
            </View>

        </View>
    )
}