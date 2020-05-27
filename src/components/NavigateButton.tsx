import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function NavitageButton(props: { title: string; screen: string }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 58,
        width: 240,
        backgroundColor: '#555F74',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        borderRadius: 6,
      }}
      onPress={() => navigation.navigate(props.screen)}
    >
      <Text style={{ color: 'white', fontSize: 16, letterSpacing: 0.2 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
