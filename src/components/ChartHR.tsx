import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import relaxData from '../../data/relax.json';

export function ChartHR() {
  return (
    <View>
      <LineChart
        data={{
          labels: relaxData
            .filter((_, i) => i % 30 === 0)
            .map((a) => a.timestamp.toString()),
          datasets: [
            {
              data: relaxData.filter((_, i) => i % 20 === 0).map((a) => a.HR),
              color: (opacity = 1) => `rgba(201, 56, 56, ${opacity})`,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisSuffix=" bmp"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: '#3D4556',
          backgroundGradientTo: '#3D4556',
          decimalPlaces: 0,
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
