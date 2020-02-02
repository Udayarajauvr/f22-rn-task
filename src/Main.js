import React ,{Component} from 'react';
import {View , Text ,StyleSheet,ScrollView} from 'react-native';
import Header from '../components/common/Header';
import firebase from 'firebase';
import LoginForm from '../components/LoginForm';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import CardSection from '../components/common/CardSection';
import Sidebar from '../components/common/Sidebar';
import MasonryImage from '../feedpic/Feed';
import Navbar from '../components/common/Navbar';
class Main extends Component{

    state = {loggedIn : null};
    componentDidMount() {
        
          if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBWW5IqzN-S2rZ4idEt7xOQw9JFGNIJZn8',
                authDomain: 'authentication-bcc77.firebaseapp.com',
                databaseURL: 'https://authentication-bcc77.firebaseio.com',
                projectId: 'authentication-bcc77',
                storageBucket: 'authentication-bcc77.appspot.com',
                messagingSenderId: '891893713174',
                appId: '1:891893713174:web:af1691e7d34eb64cafa837',
                measurementId: 'G-4HH4XKK01M'
          });
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState ({ loggedIn : true });
            } else { 
                this.setState ({ loggedIn : false });
            }

        });

    }

    renderLogin() {
        switch (this.state.loggedIn) {
            case true :
                 return (
                       <View>
                           {/* <Sidebar /> */}
                           <Navbar/>
                           {/* <Button style={styles.masonry} onPress = {() => firebase.auth().signOut()} >  Log out </Button> */}
                           <ScrollView><View style={styles.masonry}><MasonryImage/></View></ScrollView>
                           
                        </View>
                 );
            case false : 
                return <LoginForm />;
            default : 
                return  <Spinner size = 'large' />;
        }
    }



    render(){
        return( 
            <View >
                <View >
                {this.renderLogin()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle : {
        flex : 1,   
        alignItems : 'center',
        justifyContent : 'center'
    },
    masonry: {
        height: '100%',
        width:'100%'
    }
});

export default Main;