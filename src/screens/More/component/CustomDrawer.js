import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { TextStyle } from '../../../utils/GlobalStyles';


const CustomDrawer = ({ props, navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, }}>
                <View style={{ alignItems: "center", marginTop: 50, }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 100, }}
                        source={require('../../../assets/images/Rectangle6.png')}
                    />
                </View>
                <View style={{ marginTop: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[TextStyle.h7, { color: COLORS.primary, fontWeight: '500' }]}>Change profile image</Text>
                    <Text style={[TextStyle.h3, { marginTop: 6, color: COLORS.black, fontWeight: '500' }]}>Ali Ullah Turi</Text>
                </View>
            </View>


            <View style={{ flex: 1.8, backgroundColor: COLORS.primary, }}>
                <TouchableOpacity onPress={()=>navigation.navigate('changePassword')}>
                    <View style={{ flexDirection: 'row', marginVertical: 24, marginHorizontal: 15, }}>
                        <Image
                            style={{}}
                            source={require('../../../assets/icons/key.png')}
                        />
                        <Text style={[TextStyle.h5, styles.listText]}>Change Password</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginHorizontal: 15, }}>
                    <Image
                        style={{}}
                        source={require('../../../assets/icons/setting1.png')}
                    />
                    <Text style={[TextStyle.h5, styles.listText]}>Setting</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 24, marginHorizontal: 15, }}>
                    <Image
                        style={{}}
                        source={require('../../../assets/icons/help.png')}
                    />
                    <Text style={[TextStyle.h5, styles.listText]}>About</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, }}>
                        <Image
                            style={{}}
                            source={require('../../../assets/icons/signout.png')}
                        />
                        <Text style={[TextStyle.h5, styles.listText]}>Logout</Text>
                    </View>
                </View>
            </View>



        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    listText: {
        color: COLORS.white,
        paddingLeft: 16,
    }
});