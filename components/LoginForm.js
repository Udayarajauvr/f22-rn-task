import React , {Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import Button from './common/Button';
import Card  from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';
import firebase from 'firebase';
import ImageContainer from '../components/common/ImageContainer';
import Signup from './Signup';

class LoginForm extends Component{

    state = {email : '', password : '', error : '', loading : false, usernameError: false, openSignup: false };


    onButtonPress() {
         const {email ,password} = this.state;
         
         if(email.trim() === "" || password.trim().length < 6 ) {
            alert("Please enter valid Username and password");
         }
         else{
            this.setState ({error : '', loading : true});
             firebase.auth().signInWithEmailAndPassword(email , password )
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
         }
        
    }


    onLoginFail() {
        this.setState ({error : 'Authentication Failed' , loading : false});
    }

    onLoginSuccess() {
        this.setState ({email : '' , password : '' , error :'' , loading : false});
    }

    

    renderButton () {
        if( this.state.loading) {
           return <Spinner size = "small" />
        }
        return (
            <Button onPress = { this.onButtonPress.bind(this)}>
            Log in
            </Button>
        );
    };

    usernameValidation = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email && !re.test(email.toString().toLowerCase())){
        this.setState({ usernameError: true, email})
        }
        else{
            this.setState({ usernameError: false, email })
        }
        
    };

    handleSignup = () => {
        this.setState({ openSignup: true });
    };
    
    signupClose = () => {
        this.setState({ openSignup: false });
    }


    render(){
        const { usernameError, openSignup } = this.state;
        return (
            <View>
                {
                    !openSignup ?
                    <View>
                    <View >
                       <ImageContainer />
                    </View>

                    <View style = {styles.spacing1}>
                        <Text>Log into your Account </Text>
                    </View>
                    <CardSection >
                        <Input  
                        placeholder = "Email"
                        value = {this.state.email}
                        onChangeText = {email => this.usernameValidation(email) } />
                        
                        </CardSection>
                        {
                        usernameError ? 
                        <Text style = {styles.errorStyle}> 
                            Please enter a valid username
                        </Text>
                        :
                        null
                        }
                    <CardSection>
                    <Input
                        secureTextEntry
                        placeholder = "Password"
                        value = {this.state.password}
                        onChangeText = {password => this.setState({ password })} />
                    </CardSection>
                        
                        <Text style = {styles.errorStyle}> 
                            {this.state.error}
                        </Text>
                    <View>
                            {this.renderButton()}
                        </View>
                    <View> 
                        <TouchableOpacity>
                            <Text onPress={this.handleSignup} style = {styles.accountStyle}>
                                Don't have an account? Signup
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text style = {styles.accountStyle}>
                                Not your account? Login
                            </Text>
                            </TouchableOpacity>

                            
                    </View>
                    </View>
                :
                <Signup signupClose={this.signupClose}/>
                }
        
            </View>
        );
    }

}


const styles = StyleSheet.create({
 errorStyle : {
     fontSize : 18,
     color : 'red',
     alignSelf : 'center'
 },
 accountStyle : {
     paddingTop :20,
     textAlign: 'center'

 },
 spacing1: {
     paddingTop : 150,
     paddingLeft : 20,
     marginBottom: 30
 },
 spacing: {
    marginTop : 60
}
});
export default LoginForm;