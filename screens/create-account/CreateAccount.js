import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import firebase from 'firebase';

import Colors from '../../constants/Colors';

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpUser = () => {
    try {
      if (password.length < 6) {
        alert('Please enter at least 6 characters');
        return;
      }
      console.log(email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(alert('Your account has been created. Please login to continue'))
        .then(() => navigation.navigate('UserData'));
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.loginText}>email</Text>
          <TextInput
            style={styles.unos}
            onChangeText={text => setEmail(text)}
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
            title='sign up'
            color={Colors.buttonPrimary}
            onPress={() => signUpUser(email, password)}
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

export default CreateAccount;
