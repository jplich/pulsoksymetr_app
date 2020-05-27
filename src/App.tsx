'use strict';

import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react';
import { Platform, StyleSheet, Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavitageButton } from './components/NavigateButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

//const instructions = Platform.select({ ... });

type Props = {};

function StartScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => navigation.replace('Home'), 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#2E323C',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon icon={faHeartbeat} size={96} color={'#C93838'} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E323C',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faHeartbeat} size={96} color={'#C93838'} />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: '#3D4556',
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
          borderTopRightRadius: 27,
          borderTopLeftRadius: 27,
        }}
      >
        <View style={{ flex: 1 }}>
          <NavitageButton title="CONFIGURATION" screen="Configuration" />
          <NavitageButton title="MEASUREMENT" screen="Measurement" />
          <NavitageButton title="HISTORY" screen="History" />
          <NavitageButton title="TRAINING" screen="Training" />
        </View>
      </View>

      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      /> */}
    </View>
  );
}

function ConfigurationScreen({ route, navigation }) {
  // const { itemId } = route.params;
  // const { otherParam } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <Text style={{ color: 'white' }}>Configuration Screen</Text>
    </View>
  );
}

function MeasurementScreen({ route, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <Text style={{ color: 'white' }}>Measurement Screen</Text>
    </View>
  );
}

function HistoryScreen({ route, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <Text style={{ color: 'white' }}>History Screen</Text>
    </View>
  );
}

function TrainingScreen({ route, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <Text style={{ color: 'white' }}>Training Screen</Text>
    </View>
  );
}

// function ProfileScreen({ route, navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to the first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const Stack = createStackNavigator();

const HeaderIcon = () => (
  <FontAwesomeIcon
    icon={faHeartbeat}
    size={36}
    color={'#FFFFFF'}
    style={{ marginRight: 12 }}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2E323C',
          },
          headerTintColor: '#fff',
          headerRight: HeaderIcon,
        }}
      >
        <Stack.Screen
          name="Start"
          options={{ headerShown: false }}
          component={StartScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Configuration" component={ConfigurationScreen} />
        <Stack.Screen name="Measurement" component={MeasurementScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
