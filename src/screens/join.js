import React from 'react';
import { ImageBackground, Image, View, Text, StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextButton from "../components/TextButton";
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';

export default join = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <ImageBackground
                resizeMode='cover'
                source={require('../assets/icons/image.png')}
                style={{ flex: 1, height: '100%', width: '100%', }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/logo.png')} />
                </View>
                <View style={{ flex: 1, marginHorizontal: 24, }}>
                    <TextButton
                        style={{ backgroundColor: COLORS.secondary, color: COLORS.white, }}
                        text='Log in with Facebook'
                        bgcolor='#3E5FAA'
                        // onPress={() => navigation.navigate('login')}
                        icon={require('../assets/icons/facebook.png')}
                    />
                    <View style={{ marginTop: 25 }}>
                        <TextButton
                            style={{ backgroundColor: COLORS.danger, color: COLORS.white, }}
                            text='Log in with Email'
                            bgcolor='#FB0202'
                            // onPress={() => navigation.navigate('login')}
                            icon={require('../assets/icons/email.png')}
                        />
                    </View>
                    <View style={{

                        marginTop: 25

                    }}>
                        <TextButton
                            style={{ color: COLORS.white, }}
                            text='Sign In'
                            bgcolor='rgba(0,0,0,0.4)'
                            onPress={() => navigation.navigate('signin')}
                        />
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginVertical: 30, }}>
                        <Text style={[, TextStyle.h5, { textAlign: 'center', color: COLORS.white, }]}>
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