import React from 'react';
import { Image, View, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

export default splish = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white,}}>
            <Image source={require('../assets/icons/splish.png')}
                style={{}} />
        </View>
    )
}