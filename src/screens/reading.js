import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import Header from '../components/header';
import TextButton from "../components/TextButton";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';


export default reading = ({ navigation }) => {
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const [numberofpages, setnumberofpages] = useState(0)
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
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={require('../assets/icons/star.png')}
                        />
                    <Text style={[styles.text, { paddingLeft: 5, }]}>4.5</Text>
                </View>

                <Text style={[styles.text, {}]}>2.4k read</Text>
                <Text style={[styles.text, {}]}>{numberofpages} pages</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginBottom: 16, paddingBottom: 10, borderBottomWidth: 1, borderColor: COLORS.grayDark, marginHorizontal: 27, }}>
                <Text style={[styles.text, { paddingLeft: 5, fontSize: 24, lineHeight: 36, paddingLeft: 30, }]}>ALIF</Text>
                <Image
                    source={require('../assets/icons/vector1.png')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        setnumberofpages(numberOfPages)
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                />

            </View>

            <View style={{ marginHorizontal: 24, marginBottom: 12 }}>
                <TextButton

                    style={{ color: COLORS.white, }}
                    text='Continue Reading'
                    bgcolor={COLORS.primary}
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