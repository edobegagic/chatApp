import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

import firebase from 'firebase';
import firebaseConfig from '../../config/Firebase';
import Colors from '../../constants/Colors';

import { UserContext } from '../../UserContext';

firebase.initializeApp(firebaseConfig);

const UserData = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  /* naci neko elegantnije rjesenje. bez inicijalizacije importovanog Firebase iz Firebase.js (u config) mi prikazuje error */
  /* prebaciti email state u feed da može korisnik imat ime */
  const { userName, setUserName } = useContext(UserContext);

  const loginUser = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(alert('Login successful'))
        .then(user => {
          navigation.navigate('AppTabNavigator');
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.loginText}>email</Text>
          <TextInput
            style={styles.unos}
            onChangeText={text => {
              setEmail(text);
              setUserName(text);
            }}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.loginText}>password</Text>
          <TextInput
            style={styles.unos}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.loginButton}>
          <Button
            title='LOGIN'
            color={Colors.buttonPrimary}
            onPress={() => loginUser(email, password)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },
  loginContainer: {
    height: 300,
    width: '70%',
    paddingTop: '5%'
  },
  inputContainer: {
    paddingBottom: 10
  },
  loginText: {
    color: Colors.secondaryText
  },
  unos: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  },
  loginButton: {
    marginHorizontal: 50,
    height: 100,
    paddingTop: 15
  }
});

export default UserData;
