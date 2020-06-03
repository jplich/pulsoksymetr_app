'use strict';

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import { StartScreen } from './screens/Start';
import { HomeScreen } from './screens/Home';
import { ConfigurationScreen } from './screens/Configuration';
import { MeasurementScreen } from './screens/Measurement';
import { HistoryScreen } from './screens/History';
import { TrainingScreen } from './screens/Training';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
