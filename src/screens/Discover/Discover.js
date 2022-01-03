import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import Header from '../../components/header';
import Book from '../../components/Book';
import { TextStyle } from '../../utils/GlobalStyles';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        text: 'The Psychology of  Money',
        subText: 'By MORGAN HOUSEL',
        icon: require('../../assets/images/book1.jpg'),
    },
    {
        text: 'The Psychology of  Money',
        subText: 'By MORGAN HOUSEL',
        icon: require('../../assets/images/book1.jpg'),
    },
    {
        text: 'The Psychology of  Money',
        subText: 'By MORGAN HOUSEL',
        icon: require('../../assets/images/book1.jpg'),
    },
    {
        text: 'The Psychology of  Money',
        subText: 'By MORGAN HOUSEL',
        icon: require('../../assets/images/book1.jpg'),
    },
]

const cag = [
    "Today Books",
    "Most Readed",
    "Top Rated",
    "Recommanded"
]

export default function Discover({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Header
                title='Discover'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <ScrollView>
                {cag.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={[TextStyle.h3, { fontWeight: 'bold', color: COLORS.black, paddingTop: 30, paddingLeft: 12, marginBottom: 16, }]}>{item}</Text>
                            <View style={{ marginLeft: 12 }}>
                                <FlatList
                                    horizontal={true}
                                    data={DATA}
                                    renderItem={({ item }) => (
                                        <Book
                                            text={item.text}
                                            subText={item.subText}
                                            icon={item.icon}
                                            navigation={navigation}
                                        />
                                    )}

                                    keyExtractor={(item, index) => index}
                                />
                            </View>
                        </View>

                    )
                })}
            </ScrollView>
        </View>
    );
}
