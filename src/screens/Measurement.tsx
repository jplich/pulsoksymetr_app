import React from 'react';
import { View } from 'react-native';
import { MyChart } from '../components/Chart';

export function MeasurementScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <MyChart />
    </View>
  );
}
