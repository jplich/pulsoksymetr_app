import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export function Cat(props: { name: string }) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        Hello, I am a cat {props.name}, and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Gimme milk!!' : 'Thank u! u.u'}
      />
    </View>
  );
}

export function MiauTranslator() {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate to miau!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map((word) => word && 'miau')
          .join(' ')}
      </Text>
    </View>
  );
}
