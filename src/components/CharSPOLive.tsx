import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { takeLast } from 'lodash/fp';

export function ChartSPO2Live() {
  const [values, setValues] = useState<{ time: number; value: number }[]>([
    { time: 0, value: Math.random() * 5 + 95 },
  ]);

  const createValue = (time: number) =>
    setValues((a) =>
      takeLast(15, a.concat({ time, value: Math.random() * 2 + 95 }))
    );

  useEffect(() => {
    let time = 1;
    const interval = setInterval(() => createValue(time++), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <LineChart
        data={{
          labels: values.map((a) => a.time.toString()),
          datasets: [
            {
              data: values.map((a) => a.value),
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
