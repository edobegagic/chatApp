import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../../UserContext';

/* provjerit kako sam dobio edo u databaseu i da bude podesivo ovisno o useru koji je log in */

const Feed = () => {
  const [messages, setMessages] = useState();
  const { userName, setUserName } = useContext(UserContext);

  firebase
    .database()
    .ref(`users/`)
    .once('value', data => {
      setMessages(data);
    })

    .catch(error => {
      console.log('error ', error);
    });

  const messagesList = JSON.stringify(messages);
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Text>{messagesList}</Text>
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

export default Feed;
