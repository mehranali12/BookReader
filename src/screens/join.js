import React from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextButton from "../components/TextButton";
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';

export default join = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                resizeMode='cover'
                source={require('../assets/icons/image.png')}
                style={{ flex: 1, height: '100%', width: '100%', }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/logo.png')} />
                </View>


                <View style={{ flex: 1, }}>
                    <TextButton
                        style={{ backgroundColor: COLORS.secondary, color: COLORS.white, }}
                        text='Log in with Facebook'
                        // onPress={() => navigation.navigate('login')}
                        icon={require('../assets/icons/facebook.png')}
                    />

                    <View style={{ marginTop: 25, }} />
                    <TextButton
                        style={{ backgroundColor: COLORS.danger, color: COLORS.white, }}
                        text='Log in with Email'
                        // onPress={() => navigation.navigate('login')}
                        icon={require('../assets/icons/email.png')}
                    />

                    <View style={{ marginTop: 25, }} />
                    <View style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLORS.white, borderRadius: 30, marginLeft: 30, marginRight: 30, paddingRight: 30, height: 46, }}>
                        <TextButton
                            style={{ color: COLORS.white, }}
                            text='Sign In'
                            onPress={() => navigation.navigate('signin')}
                        />
                    </View>
                    <View style={{ marginHorizontal: 40, justifyContent: 'flex-end', marginVertical: 30, }}>
                        <Text style={[, TextStyle.h5,{ textAlign: 'center', color: COLORS.white, }]}>
                            By signing up, I agree to BookRead’s Terms of
                            Services, Privacy, Guest Refund Policy,
                            and Host Guarantee Terms.
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}