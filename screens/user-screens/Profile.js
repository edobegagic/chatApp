import React, { useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

/* ovdje napraviti profile tab koji će sadržavati change profile pic, user name (nickname), location itd. */

import { UserContext } from '../../UserContext';

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>DISPLAYING USER NAME:</Text>
      <Text>{userName}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Profile;
