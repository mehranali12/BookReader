import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';


export default signin = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='Sign In for BookReader'
                icon={require('../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 50, }}>
                <Image source={require('../assets/icons/splish.png')}
                    style={{ height: 113, width: 125, }} />
            </View>

            <View style={{ marginTop: 40, }}>
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
                marginHorizontal: 24
            }}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Sign In'
                    bgcolor={COLORS.primary}
                    onPress={() => navigation.navigate('home')}
                />
            </View>

            <View style={{ marginHorizontal: 40, marginTop: 40, }}>
                <Text style={styles.allBlaceText}>
                    By creating an account, you agree to the BookReader
                    Terms of Services and Privacy Policy.
                </Text>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('forgetPassword')}
                style={{ marginTop: 20, }}>
                <Text style={[styles.forgetpassoerd, TextStyle.h6]}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={[styles.allBlaceText, TextStyle.h6]}>Not a member? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('signup')}
                >
                    <Text style={[styles.forgetpassoerd, TextStyle.h6]}>Sign up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    forgetpassoerd: {
        color: COLORS.primary,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    allBlaceText: {
        textAlign: 'center',
    },
});