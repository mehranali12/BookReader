import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import TextButton from '../../components/TextButton';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function accountSetting({ props, navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header
                title='Setting'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h3, { fontWeight: '500', color: COLORS.primary, }]}>ACCOUNT</Text>
            </View>

            <View style={{ paddingVertical: 20, paddingHorizontal: 32, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.primary, }]}>Email</Text>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.gray, }]}>example@email.com</Text>
            </View>

            <View style={{ paddingVertical: 20, paddingHorizontal: 32, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.primary, }]}>Password</Text>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.gray, }]}>************</Text>
            </View>


            <View style={{ paddingVertical: 16, paddingHorizontal: 20, }}>
                <Text style={[TextStyle.h3, { fontWeight: '500', color: COLORS.primary, }]}>LINKED ACCOUNTS</Text>
            </View>

            <View style={{ marginTop: 10, marginHorizontal: 24, }}>
                <TextButton
                    style={{ backgroundColor: COLORS.secondary, color: COLORS.white, }}
                    text='Your Facebook account is linked.'
                    bgcolor='#3E5FAA'
                    // onPress={() => navigation.navigate('login')}
                    icon={require('../../assets/icons/facebook.png')}
                />
            </View>

            <View style={{ paddingVertical: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[TextStyle.h5, { fontWeight: '500', color: COLORS.primary, textDecorationLine: 'underline' }]}>Disconnect from Facebook</Text>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                    <View style={{ marginTop: 50, marginHorizontal: 24, marginBottom: 20 }}>
                        <TextButton
                            style={{ color: COLORS.white, }}
                            text='Delete Account'
                        />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({

});