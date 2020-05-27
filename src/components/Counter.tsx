import React, { FC, useState } from 'react';
import { Button, Text } from 'react-native';

export const Counter: FC = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Button title="Increment" onPress={() => setCounter((a) => a + 1)} />
      <Text>{counter}</Text>
    </>
  );
};
