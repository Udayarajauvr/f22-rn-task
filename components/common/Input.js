import React from 'react';
import {View ,Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label , value ,onChangeText, placeholder,secureTextEntry }) => 
{ 
    return (
        <View style ={styles.containerStyle}>
            <TextInput
            style = {styles.textStyle}
            secureTextEntry = {secureTextEntry}
            placeholder = {placeholder}
            autoCorrect = {false}
            value = {value}
            onChangeText = {onChangeText}
           
            />
        </View>
    );

};

const styles = StyleSheet.create ({
    textStyle : {
        color : "#000",
        fontSize : 16 ,
        lineHeight : 21,
        alignItems: 'center',
        justifyContent : 'center',
        textAlign : 'center',
        textAlignVertical: 'center'
    },
    containerStyle :{
        flex : 1,
        flexDirection : "row",
        alignItems: 'center',
        justifyContent : 'center'

    }
});

export default Input;