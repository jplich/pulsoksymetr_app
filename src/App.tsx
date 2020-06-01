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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
