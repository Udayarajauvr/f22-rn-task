import React from 'react';
import {Text ,TouchableOpacity, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo';
const Button = ({onPress,children}) => {
   const {buttonStyle , textStyle} = styles;
    return (
        <TouchableOpacity 
        onPress = {onPress}
        style = { buttonStyle}>
                 <Text style = {textStyle}>
                        {children}
                </Text>
        </TouchableOpacity>
       
    );
};
const styles = StyleSheet.create ({
    buttonStyle : {
        flex: 1,
        backgroundColor : "rgb(138,43,236)",
        alignSelf : 'stretch',
        borderRadius : 40,
        borderWidth : 1,
        borderColor : "rgba(138,43,236,1)",
        marginLeft : 30, 
        marginRight : 30,
        borderBottomWidth: 50
       
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    textStyle : {
        alignSelf : 'center',
        fontWeight: 'bold',
        fontSize : 18 ,
        color : '#fff',
        paddingTop : 10,
        paddingBottom : 10
    }


});

export default Button;
