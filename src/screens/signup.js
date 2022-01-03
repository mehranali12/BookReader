import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';


export default signup = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='Sign up for BookReader'
                icon={require('../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 40, }}>
                <Image source={require('../assets/icons/splish.png')}
                    style={{ height: 113, width: 125, }} />
            </View>

            <View style={{ marginTop: 30, }}>
                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Name"
                />

                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Email"
                />

                <TextInputField
                    style={[{ width: '100%', }]}
                    placeholder="Password"
                />
            </View>

            <View style={{ marginTop: 30, }} />
            <View style={{
                borderWidth: 1,
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.white,
                fontFamily: FONTS.Regular,
                borderRadius: 30,
                marginLeft: 30,
                marginRight: 30,
                paddingRight: 30,
                height: 46,
            }}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Sign Up'
                onPress={() => navigation.navigate('signin')}
                />
            </View>

            <View style={{ marginHorizontal: 40, marginTop: 30, }}>
                <Text style={styles.allBlaceText}>
                    By creating an account, you agree to the BookReader
                    Terms of Services and Privacy Policy.
                </Text>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('forgetPassword')}
                style={{ marginTop: 10, }}>
                <Text style={styles.forgetpassoerd}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.allBlaceText}>Not a member? </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('signin')}
                >
                    <Text style={styles.forgetpassoerd}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    forgetpassoerd: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
        fontSize: 12,
        lineHeight: 18,
        fontStyle: 'normal',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    allBlaceText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: FONTS.medium,
        textAlign: 'center',
    },
});