import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import Header from '../components/header';
import { COLORS } from '../constants/colors';


export default continueReading = ({ navigation, style, }) => {
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const [numberofpages, setnumberofpages] = useState(0)
    const [Currentpage, setCurrentpage] = useState(1)
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>
            <View style={{}}>
                <Header
                    style={styles.alif}
                    title='ALIF'
                    icon={require('../assets/icons/leftErrow.png')}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                        setnumberofpages(numberOfPages)
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                        setCurrentpage(page)
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

            <View style={{ borderWidth: 1, borderColor: COLORS.grayDark, marginHorizontal: 20, }} />
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, paddingBottom: 16, paddingHorizontal: 24 }}>
                <Text>Page {Currentpage}</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/downErrow.png')}
                        style={{ marginLeft: 10, }}
                    />
                </TouchableOpacity>
                <Text style={{}}>{Currentpage}/{numberofpages}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    alif: {
        color: COLORS.black,
        paddingLeft: '20%',
        elevation: 0,
    },
    buttom: {}
});