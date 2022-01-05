import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import TextButton from '../../components/TextButton';


export default function accountSetting({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={{ flex: 1 }}>


            {/**start modal**/}
            <Modal
                transparent={true}
                visible={modalOpen}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalOpen(false);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ height: 320, width: 250, backgroundColor: COLORS.white, alignItems: 'center', elevation: 3, borderRadius: 10, }}>

                        <View style={styles.Box}>
                            <Image
                                source={require('../../assets/icons/delete.png')}
                                style={{ height: 32, width: 27, }} />
                        </View>

                        <Text style={[TextStyle.h1, styles.text]}>Delete?</Text>
                        <Text style={[TextStyle.h6, styles.text]}>This will permanently delete your account.</Text>



                        <View style={[styles.primaryButton, { marginTop: 16, }]}>
                            <TextButton
                                style={{ color: COLORS.white, }}
                                text='Delete'
                            />
                        </View>

                        <View style={[styles.primaryButton, { marginTop: 12, }]}>
                            <TextButton
                                style={{ color: COLORS.black, }}
                                text='Cancle'
                                bgcolor={COLORS.bouttonColor}
                                onPress={() => setModalOpen(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            {/**end modal**/}



            <Header
                title='Setting'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h3, { fontWeight: '500', color: COLORS.primary, }]}>ACCOUNT</Text>
            </View>

            <View style={{ paddingVertical: 20, paddingHorizontal: 32, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.primary, }]}>Email</Text>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.gray, }]}>example@email.com</Text>
            </View>

            <View style={{ paddingVertical: 20, paddingHorizontal: 32, borderBottomWidth: 1, borderColor: COLORS.gray, }}>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.primary, }]}>Password</Text>
                <Text style={[TextStyle.h6, { fontWeight: '400', color: COLORS.gray, }]}>************</Text>
            </View>


            <View style={{ paddingVertical: 16, paddingHorizontal: 20, }}>
                <Text style={[TextStyle.h3, { fontWeight: '500', color: COLORS.primary, }]}>LINKED ACCOUNTS</Text>
            </View>

            <View style={{ marginTop: 10, marginHorizontal: 24, }}>
                <TextButton
                    style={{ backgroundColor: COLORS.secondary, color: COLORS.white, }}
                    text='Your Facebook account is linked.'
                    bgcolor='#3E5FAA'
                    // onPress={() => navigation.navigate('login')}
                    icon={require('../../assets/icons/facebook.png')}
                />
            </View>

            <View style={{ paddingVertical: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[TextStyle.h5, { fontWeight: '500', color: COLORS.primary, textDecorationLine: 'underline' }]}>Disconnect from Facebook</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ marginTop: 50, marginHorizontal: 24, marginBottom: 20 }}>
                    <TextButton
                        style={{ color: COLORS.white, }}
                        text='Delete Account'
                        onPress={() => setModalOpen(true)}
                    />
                </View>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    Box: {
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: COLORS.danger,
        height: 70, width: 70,
        borderRadius: 70,
    },
    text: {
        color: COLORS.black,
        fontWeight: '500',
        marginTop: 15,
        textAlign: 'center'
    },
    primaryButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        borderRadius: 30,
        marginHorizontal: 30,
        height: 40,
    },
});