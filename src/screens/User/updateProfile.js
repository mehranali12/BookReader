import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';


const updateProfile = ({ props, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                title='Profile image'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{flex: 1, backgroundColor: COLORS.grayLight, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                source={require('../../assets/icons/camera2.png')}
                />
            </View>

        </View>
    );
};

export default updateProfile;

const styles = StyleSheet.create({

});