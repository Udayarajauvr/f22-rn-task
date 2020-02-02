import React , {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';
import firebase from 'firebase';

class SignupForm extends Component{

    state = {firstName : '' ,lastName : '', email : '', password : '', error : '', loading : false,usernameError: false, passwordError: false};


    onButtonPress() {
         const {firstName,lastName ,email ,password} = this.state;
         if(email.trim() === "" || password.trim().length < 6 || firstName.trim() === "" || lastName.trim() === "" ) {
            alert("All fields are mandatory");
         }
         else{
            this.setState ({error : '', loading : true});
            firebase.auth().createUserWithEmailAndPassword(email , password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
         }
                      
    };
    onLoginFail() {
        this.setState ({error : 'Authentication Failed' , loading : false});
    }

    onLoginSuccess() {
        this.setState ({email : '' , password : '' , error :'' , loading : false});
    }

    usernameValidation = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email && !re.test(email.toString().toLowerCase())){
        this.setState({ usernameError: true, email})
        }
        else{
            this.setState({ usernameError: false, email })
        }
        
    };

    passwordValidation = (password) => {
        if(password && password.length < 6 ){
            this.setState({ passwordError: true, password})
        }
        else{
            this.setState({ passwordError: false, password })
        }
    }

    renderSignupButton () {
        if( this.state.loading) {
           return <Spinner size = "small" />
        }
        return (
            <Button onPress = { this.onButtonPress.bind(this)}>
            Sign Up Now
            </Button>
        );
    }

    render()
    {
        const { usernameError, passwordError } = this.state;
        return (
            <View style={styles.signupMain}>
                <View style={styles.signupHeader}>
                 <Text style = {{fontSize: 34}}> Create Account </Text>
                 <Text style = {{fontSize: 17, marginTop: 10, marginLeft: 10}}> Welcome to Yo!</Text>
             </View>
                <View style={styles.signupContent}>
                    <CardSection>
                        <Input
                        placeholder = "First Name"
                        value = {this.state.firstName}
                        onChangeText = {firstName => this.setState({firstName })} />
                    </CardSection>
                    
                <CardSection>
                        <Input
                        placeholder = "Last Name"
                        value = {this.state.lastName}
                        onChangeText = {lastName => this.setState({ lastName })} />
                    </CardSection>

            
                    <CardSection>
                        <Input
                        placeholder = "Email"
                        value = {this.state.email}
                        onChangeText = {email => this.usernameValidation(email)} />
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
                        onChangeText = {password => this.passwordValidation(password)} />
                    </CardSection>
                    {
                        passwordError ? 
                        <Text style = {styles.errorStyle}> 
                            The password must contain atleast 6 characters
                        </Text>
                        :
                        null
                    }
                    
                    
                    </View>
                <View style={styles.signupButton} > 
                    {this.renderSignupButton()}
                    <TouchableOpacity style = {styles.siginStyle} onPress = {this.props.signupClose}>
                        <Text > 
                            Already have an account  Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
 signinStyle : {
     fontSize : 18,
     marginLeft: 20,
     marginTop: 10
 },
 signupMain: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between'
 },
 signupHeader: {
     marginTop: 50
 },
 signupButton: {
     marginBottom: 20
 },
 errorStyle : {
    fontSize : 18,
    color : 'red',
    alignSelf : 'center'
},
});
export default SignupForm;