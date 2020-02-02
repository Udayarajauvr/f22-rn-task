import React, {Component} from 'react';
import {View , Text ,StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
class Navbar extends Component {

    render(){

        return (
            <View style={styles.navbarMain}>
                <Icon style={styles.menuIcon} name="menu" size={30}/>
                <Text style={{fontSize: 20, lineHeight: 30, marginRight:'60%'}} >Feed</Text>
                <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                    <Image
                style={styles.logoutIcon}
                style={{width: 20, height: 22, marginRight:20}}
                source={require("../../../auth/assets/logout.png")}
                />
                </TouchableOpacity>
                
            </View>

        );
    }

}

const styles = StyleSheet.create({
    navbarMain: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    menuIcon: {
        marginLeft: 20
    }
});

export default Navbar;