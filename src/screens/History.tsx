import React from 'react';
import { Text, View } from 'react-native';
import { ChartSPO2 } from '../components/ChartSPO2';
import { ChartHR } from '../components/ChartHR';

export function HistoryScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D4556',
      }}
    >
      <Text style={{ color: 'white' }}>Heart Rate</Text>
      <ChartHR />

      <Text style={{ color: 'white', marginTop: 24 }}>Oxygen Saturation</Text>
      <ChartSPO2 />
    </View>
  );
}
