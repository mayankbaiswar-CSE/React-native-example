import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './components/common'
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyASZxmi_uVRFCYKUrOIs6rLsGka7N-48Mk",
            authDomain: "auth-9217c.firebaseapp.com",
            databaseURL: "https://auth-9217c.firebaseio.com",
            projectId: "auth-9217c",
            storageBucket: "auth-9217c.appspot.com",
            messagingSenderId: "1046055907115"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log out
                </Button>
            );
        }
        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText='Login' />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;