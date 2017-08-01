import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';

export default class App extends Component {
  
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBGjuwUeDmXBKSurotEf52dukjEGmKegbk',
      authDomain: 'managerapp-2b4f8.firebaseapp.com',
      databaseURL: 'https://managerapp-2b4f8.firebaseio.com',
      projectId: 'managerapp-2b4f8',
      storageBucket: 'managerapp-2b4f8.appspot.com',
      messagingSenderId: '29437786813'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>WELCOME</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
