import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const imagecontainer = () => {
    return(
        <View style={styles.container}>
        <Image source={require('/Users/Udaya Raja/auth/pic/yo.png')}  style={styles.backgroundImage}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        paddingTop : 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column',
   },
        backgroundImage:{
        display: "flex",
        margin : 0 ,
        width:180,
        height:90,
      }
});

export default imagecontainer;