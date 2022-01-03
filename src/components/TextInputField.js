import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS, colors, FONTS } from '../constants';
import { GolbalStyle, TextStyle } from '../utils/GlobalStyles';


export default TextInputField = ({ placeholder, value, onChangeText, secureTextEntry, icon, }) => {
    return (
        <TextInput
            icon={icon}
            placeholder={placeholder}
            placeholderTextColor={COLORS.TextInputColor}
            style={[styles.inputContainer, TextStyle.h3]}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 48,
        borderWidth: 1.5,
        marginTop: 16,
        marginHorizontal: 23,
        paddingHorizontal: 23,
        borderRadius: 30,
    }
})