/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';

/* ovu stranicu prikazivat samo pri prvom skidanju aplikacije. tj. ako korisnik nije ulogiran. to se može s useEffect */
/* treba nabaciti opciju logout. u slucaju da korisnik nije logout, ne prikazivati welcome page */

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ height: 200, width: 200 }}
          source={require('../assets/img/logo.png')}
        />
      </View>

      <View style={styles.welcomeTextContainer}>
        <View style={styles.welcomeTextTextContainer}>
          <Text style={styles.welcomeText}>
            In a cat's eye, all things belong to cats.
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='CREATE ACCOUNT'
            color={Colors.buttonPrimary}
            onPress={() => navigation.navigate('CreateAccount')}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.accountText}>Have an account already?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserData');
          }}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 30,
    width: '100%',
    backgroundColor: Colors.buttonPrimary
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50%'
  },
  title: {
    fontFamily: 'airplanes-nightsky',
    fontSize: 30,
    color: Colors.primaryText
  },
  welcomeTextContainer: {
    flex: 3,
    paddingTop: '30%',
    paddingBottom: 0,
    marginBottom: 0
  },
  welcomeTextTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingLeft: 45
  },
  welcomeText: {
    fontFamily: 'airplanes-nightsky',
    fontSize: 25,
    color: Colors.primaryText
  },
  buttons: {
    marginHorizontal: 50,
    height: 100
  },
  footer: {
    flex: 1,
    alignItems: 'center'
  },
  accountText: {
    color: Colors.secondaryText
  },
  loginText: {
    color: Colors.buttonPrimary
  }
});

export default WelcomePage;
