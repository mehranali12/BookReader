import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import Header from '../../components/header';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import BookList from './component/bookslist';
const list = [
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },
    {
        title: 'sdfasdf',
        sub: 'sdfasdf'
    },


]
export default function More() {

    return (
        <View style={{ flex: 1 , backgroundColor:'#fff' }}>
            <Header
                title='Profile'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1.4, paddingTop: 45, backgroundColor: "#fff" }}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: 130, height: 130, borderRadius: 100, }}
                        source={require('../../assets/images/Rectangle6.png')}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[TextStyle.h1]}>Mehran Ali</Text>
                    <Image
                        style={{ marginLeft: 12, }}
                        source={require('../../assets/icons/edit.png')}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: "center" }}>
                    <View style={{ marginRight: '8%' }} >
                        <View style={{ alignItems: "center" }}>
                            <Image
                                style={{ width: 41, height: 41, }}
                                source={require('../../assets/icons/library_books.png')}
                            />

                        </View>
                        <View style={{ marginTop: 6 }}>
                            <Text style={TextStyle.h5}>Reading Book</Text>
                        </View>
                    </View>

                    <View>
                        <Image
                            resizeMode='cover'
                            style={{ width: 41, height: 41 }}
                            source={require('../../assets/icons/setting.png')}
                        />
                        <View style={{ marginTop: 6 }}>
                            <Text style={TextStyle.h5}>Setting</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 24 ,  borderTopLeftRadius:24 , backgroundColor: COLORS.grayLight,  borderTopRightRadius:24 , }}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={(item, index) => {
                        return (
                            <BookList
                            
                            index={index} />
                        )
                    }}

                />
            </View>


        </View>
    );
}