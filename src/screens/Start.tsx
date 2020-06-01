import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

export function StartScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => navigation.replace('Home'), 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#2E323C',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon icon={faHeartbeat} size={96} color={'#C93838'} />
    </View>
  );
}
