/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { Logo } from './components/Logo';
import { Counter } from './components/Counter';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#7EE8FA',
          }}
        >
          <Logo />
          <Counter />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
