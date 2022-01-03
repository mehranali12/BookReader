import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextInputField from '../components/TextInputField';
import TextButton from "../components/TextButton";
import Header from '../components/header';
import Views from '../components/view';

const data = [
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    },
    {
        authname: 'By Umaira Ahmed',
        title: 'ALIF',
        text: 'Alif is the latest novel (as of March 2021)',
        date: 'May 20 · 5.0',
        icon2: require('../assets/icons/star.png'),
        icon: require('../assets/images/image1.jpg'),

    }
]
export default function home ({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>

            <Header
                title='Home'
            />

            <FlatList
                data={data}
                renderItem={({item}) => (
                    <Views
                        authname={item.authname}
                        title={item.title}
                        text={item.text}
                        date={item.date}
                        icon2={item.icon2}
                        icon={item.icon}
                        navigation= {navigation}
                    />

                )}
                keyExtractor={(item, index)=> index}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});