import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../../UserContext';

const Messages = () => {
  const [message, setMessage] = useState();
  const [messageNr, setMessageNr] = useState(0);
  const { userName, setUserName } = useContext(UserContext);

  const nekoIme = userName.replace('@', '');
  const vrijednost = nekoIme.replace('.', '');
  /* putem messagea (set) saljem u REALTIME DATABASE podatke
  /* probati nekako s firebasea fetchati ime usera. ili neki auth ako ima da se preko njega spoji. inace ce vjerojatno redux ili mobx trebat */
  /* prikazuje warning: setting a timer for a long period of time. pogledat o cemu se radi kasnije */
  /* ako se logiram s istim userom brise mi stare poruke. trebao bi nekako napraviti da nastavi brojati od zadnje unesene. da ju povuce s firebasea */
  const writeUserData = () => {
    firebase
      .database()
      .ref(`users/${vrijednost}/${messageNr}`)
      .set({
        message
      })
      .then(() => {
        console.log('data ', message);
      })
      .then(setMessageNr(messageNr + 1))
      .catch(error => {
        console.log('error ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Messages</Text>
      <TextInput
        style={styles.unos}
        onChangeText={text => setMessage(text)}
        value={message}
      />
      <Button title='post message' onPress={writeUserData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unos: {
    height: 40,
    width: '60%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  }
});

export default Messages;
