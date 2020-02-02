import React from 'react';
import {View , StyleSheet} from 'react-native';

const Card = (props) => {
return (
<View style = {styles.containerStyle}>
{props.children}
</View>
);
};
const styles = StyleSheet.create ({
    containerStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : 'rgb(12,125,126)',
        borderBottomWidth : 0,
        shadowColor : 'rgb(155,255,255)',
        shadowOffset : {width : 0 ,height : 10},
        shadowOpacity : 0.2,
        shadowRadius : 2,
        elevation : 2,
        marginLeft :10,
        marginRight:10,
        marginTop: 10 ,
        marginBottom: 10
    
    }
});

export default Card;
