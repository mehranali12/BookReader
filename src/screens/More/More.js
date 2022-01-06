import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import BookList from './component/bookslist';

const list = [
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },
    {
        title: 'ALIF',
        sub: 'Alif is the latest novel (as of March ...',
        icon2: require('../../assets/icons/bookmark.png'),
        icon: require('../../assets/images/image1.jpg'),
    },


]

export default function More({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                title='Profile'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ flex: 0.7, paddingTop: 45, backgroundColor: "#fff" }}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: 130, height: 130, borderRadius: 100, }}
                        source={require('../../assets/images/Rectangle6.png')}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "center", alignItems: 'center' }}>
                    <Text style={[TextStyle.h1, { marginLeft: 24 }]}>Mehran Ali</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('updateProfile')}>
                        <View style={{ marginLeft: 12 }}>
                            <Image
                                source={require('../../assets/icons/edit.png')}
                                style={{ height: 16, width: 16, }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: "center" }}>
                    <View style={{ marginRight: '4%' }} >
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('home')}
                            >
                                <Image
                                    style={{ width: 24, height: 24, }}
                                    source={require('../../assets/icons/library_books.png')}
                                />
                            </TouchableOpacity>

                        </View>
                        {/* <View style={{ marginTop: 6 }}>
                            <Text style={TextStyle.h5}>Reading Book</Text>
                        </View> */}
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                resizeMode='cover'
                                style={{ width: 24, height: 24 }}
                                source={require('../../assets/icons/setting.png')}
                            />
                        </TouchableOpacity>
                        {/* <View style={{ marginTop: 6 }}>
                            <Text style={TextStyle.h5}>Setting</Text>
                        </View> */}

                    </View>
                </View>
            </View>


            <View style={{ flex: 1, borderTopLeftRadius: 24, backgroundColor: COLORS.grayLight, borderTopRightRadius: 24, }}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={(item, index) => {
                        return (
                            <BookList
                                title={item.title}
                                sub={item.sub}
                                icon2={item.icon2}
                                icon={item.icon}
                                navigation={navigation}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ height: 10 }}>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                />
            </View>


        </View>
    );
}