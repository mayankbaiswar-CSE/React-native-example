import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyASZxmi_uVRFCYKUrOIs6rLsGka7N-48Mk",
            authDomain: "auth-9217c.firebaseapp.com",
            databaseURL: "https://auth-9217c.firebaseio.com",
            projectId: "auth-9217c",
            storageBucket: "auth-9217c.appspot.com",
            messagingSenderId: "1046055907115"
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Login' />
                <LoginForm />
            </View>
        );
    }
}
export default App;