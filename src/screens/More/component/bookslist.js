import React from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../../../components/header';
import { TextStyle } from '../../../utils/GlobalStyles';

export default function bookList({ index }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            paddingBottom: 16,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderColor: "gray",
            // borderTopLeftRadius: index == 0 ? 12 : 0
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('../../../assets/images/image1.jpg')}
                    style={{ height: 53, width: 43 }}
                />

                <View style={{ justifyContent: "flex-end", marginLeft: 12 }}>
                    <Text>ALIF</Text>
                    <Text>Alif is the latest novel (as of March ...</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Image
                    source={require('../../../assets/icons/bookmark.png')}
                    style={{}}
                />
            </View>

        </View>
    );
}