import React from 'react';
import {View,StyleSheet } from 'react-native';
 

const CardSection = (props) => 
{
    return(
        <View style = {styles.containerStyle}>
            {props.children}  
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth : 1,
        borderColor : '#ddd',
        padding : 10,
        backgroundColor : '#fff',
        flexDirection : 'row',
        justifyContent : 'center',
        marginBottom:20,
        marginLeft :20,
        marginRight :20,
        borderRadius: 30,
        shadowColor: '#fff',
        shadowOpacity: 2,
        elevation: 4,
        position: 'relative'
    
    
    }
});
export default CardSection;
