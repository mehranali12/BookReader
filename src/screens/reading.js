import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';


export default reading = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='ALIF'
                icon={require('../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ alignItems: 'center', marginTop: 30, }}>
                <Image
                    source={require('../assets/icons/readingBook.png')}
                />
            </View>

            <View style={{ backgroundColor: COLORS.grayLight, height: 56, marginTop: 20, marginHorizontal: 27, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/icons/star.png')}
                    />
                    <Text style={[styles.text, { paddingLeft: 5, }]}>4.5</Text>
                </View>
                <Text style={[styles.text, {}]}>2.4k read</Text>
                <Text style={[styles.text, {}]}>340 pages</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginBottom: 16, paddingBottom: 10, borderBottomWidth: 1, borderColor: COLORS.grayDark, marginHorizontal: 27, }}>
                <Text style={[styles.text, { paddingLeft: 5, fontSize: 24, lineHeight: 36, paddingLeft: 30, }]}>ALIF</Text>
                <Image
                    source={require('../assets/icons/vector1.png')}
                />
            </View>

            <ScrollView >
                <View style={{flex:1, marginHorizontal: 16, }}>
                    <Text>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...........
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...........
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...........
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...........
                    </Text>
                </View>
            </ScrollView>
            <View style={[styles.primaryButton, { backgroundColor: COLORS.primary, marginBottom: 19,}]}>
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Continue Reading'
                onPress={() => navigation.navigate('continueReading')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 15,
    },
    primaryButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        fontFamily: FONTS.Regular,
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        paddingRight: 30,
        height: 46,
    }
});