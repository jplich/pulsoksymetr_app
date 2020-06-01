import React from 'react';
import { View, Text } from 'react-native';

export function ConfigurationScreen() {
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
