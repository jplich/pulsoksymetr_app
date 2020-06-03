import React from 'react';
import { View, Text } from 'react-native';
import { ChartHRLive } from '../components/ChartHRLive';
import { ChartSPO2Live } from '../components/CharSPOLive';

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
      <Text style={{ color: 'white' }}>Heart Rate</Text>
      <ChartHRLive />

      <Text style={{ color: 'white', marginTop: 24 }}>Oxygen Saturation</Text>
      <ChartSPO2Live />
    </View>
  );
}
