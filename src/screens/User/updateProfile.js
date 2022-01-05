import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextStyle } from '../../utils/GlobalStyles';
import Header from '../../components/header';
import ImagePicker from 'react-native-image-crop-picker';


const updateProfile = ({ props, navigation }) => {

    const takePhotoFromCamera = async () => {
        ImagePicker.openCamera({
            cropping: true,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType: 'photo',
        })
            .then(response => {
                console.log('received your image', response);
                var temp = [...imageArray]
                temp.push(response)
                setdata(temp)
            }).catch((e) => console.log('error', error))
    };


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.grayLight, }}>
            <Header
                title='Profile image'
                icon={require('../../assets/icons/leftErrow.png')}
                onPress={() => navigation.goBack()}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.gray, height: 345, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/icons/camera2.png')}
                    />
                </View>
            </View>

            <View style={{ backgroundColor: COLORS.white, height: 123, width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10, }}>
                    <Text style={{ paddingLeft: 20, }}>Profile photo</Text>
                    <Image
                        source={require('../../assets/icons/delete1.png')} />
                </View>


                <View style={{ marginTop: 18, marginLeft: 34, flexDirection: 'row' }}>
                    <View>
                        <TouchableOpacity onPress={() => takePhotoFromCamera()}>
                            <View style={styles.pickerBox}>
                                <Image
                                    source={require('../../assets/icons/camera1.png')} />
                            </View>
                            <View>
                                <Text style={styles.text}>Camera</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 16, }}>
                        <TouchableOpacity>
                            <View style={styles.pickerBox}>
                                <Image
                                    source={require('../../assets/icons/gallery.png')} />
                            </View>
                            <View>
                                <Text style={styles.text}>Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default updateProfile;

const styles = StyleSheet.create({
    pickerBox: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        height: 50, width: 50,
        borderRadius: 50,
        justifyContent: 'center'
    },
    text: {
        color: COLORS.primary
    }
});