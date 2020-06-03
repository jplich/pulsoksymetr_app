import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import relaxData from '../../data/relax.json';

export function ChartSPO2() {
  return (
    <View>
      <LineChart
        data={{
          labels: relaxData
            .filter((_, i) => i % 30 === 0)
            .map((a) => a.timestamp.toString()),
          datasets: [
            {
              data: relaxData.filter((_, i) => i % 20 === 0).map((a) => a.SPO2),
              color: (opacity = 1) => `rgba(56, 89, 202, ${opacity})`,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: '#3D4556',
          backgroundGradientTo: '#3D4556',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '1',
            stroke: '#e2e3e5',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
