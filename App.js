/* eslint-disable no-else-return */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomePage from './screens/WelcomePage';
import UserData from './screens/create-account/UserData';
import CreateAccount from './screens/create-account/CreateAccount';

import Messages from './screens/user-screens/Messages';
import Profile from './screens/user-screens/Profile';
import Feed from './screens/user-screens/Feed';
import { UserContext } from './UserContext';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [userName, setUserName] = useState('default value');

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <UserContext.Provider value={{ userName, setUserName }}>
        <AppContainer />
      </UserContext.Provider>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
  Feed,
  Messages,
  Profile
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    WelcomePage,
    AppTabNavigator,
    UserData,
    CreateAccount
  }
  /* {
    initialRouteName: 'UserData'
  } */
);

const AppContainer = createAppContainer(AppSwitchNavigator);

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'mansalva-regular': require('./assets/fonts/Mansalva-Regular.ttf')
    }),
    Font.loadAsync({
      'airplanes-nightsky': require('./assets/fonts/Airplanes-Nightsky.ttf')
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'mansalva-regular',
    fontSize: 36
  }
});

/* nastaviti sa userdata screenom koji je u biti auth screen. napraviti firebase da se mogu imati različiti profili. */
