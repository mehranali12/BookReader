import React from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import Header from '../../components/header';
import { TextStyle } from '../../utils/GlobalStyles';
import Card from '../../components/Card';
import SearchCatagory from '../../components/SearchCatagory';

const DATA = [
    {
        text: 'Adventure',
        icon: require('../../assets/images/Rectangle1.png'),
    },
    {
        text: 'Historical',
        icon: require('../../assets/images/Rectangle2.png'),
    },
    {
        text: 'Inspirational',
        icon: require('../../assets/images/Rectangle3.png'),
    },
    {
        text: 'Literature',
        icon: require('../../assets/images/Rectangle4.png'),
    },
    {
        text: 'Literature',
        icon: require('../../assets/images/Rectangle5.png'),
    },
    {
        text: 'Literature',
        icon: require('../../assets/images/Rectangle6.png'),
    },
]


export default function Search({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                title='ALIF'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />
            <ScrollView
            nestedScrollEnabled={true}
            >
                <View style={{ flexDirection: 'row', borderWidth: 1, height: 40, paddingLeft: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginHorizontal: 20, borderRadius: 30, }}>
                    <Image source={require('../../assets/icons/search1.png')}
                        style={{ justifyContent: 'center' }}
                    />
                    <TextInput
                        placeholder='Sreach'
                        style={[{ width: '100%', paddingLeft: 16, }]}
                    />
                </View>

                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={[TextStyle.h1], { color: COLORS.primary, fontWeight: '600', borderBottomWidth: 1, borderColor: COLORS.grayDark, }}>EXPLORE BY GENRE</Text>
                    <Text style={[TextStyle.h6,], { textAlign: 'center', paddingTop: 10, fontWeight: '400' }}>
                        See new release, most-read books, quotes, lists, and more in these popular genres
                    </Text>
                </View>


                {/* https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container */}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 15, }}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <Card
                                text={item.text}
                                icon={item.icon}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={(item, index) => index}
                        numColumns={3}
                    />
                </View>
{/*                 
                {DATA.map((item, index) => (
                    <View key={index}>
                        <Card
                            text={item.text}
                            icon={item.icon}
                            navigation={navigation}
                        />
                    </View>
                ))} */}

                {/* peera how to show this catagory in loop */}

                <SearchCatagory
                    text='Art'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Biography'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Business'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Chicl-lit'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Classics'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Comics'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Crime'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Fantacy'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />

                <SearchCatagory
                    text='Fiction'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
                <SearchCatagory
                    text='Classics'
                    icon={require('../../assets/icons/rightErrow.png')}
                // onPress={() => navigation.goBack()}
                />
            </ScrollView>
        </View>

    );
}