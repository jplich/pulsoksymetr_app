import React from 'react';
import { View } from 'react-native';
import { NavitageButton } from '../components/NavigateButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

export function HomeScreen() {
  //const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E323C',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faHeartbeat} size={96} color={'#C93838'} />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: '#3D4556',
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
          borderTopRightRadius: 27,
          borderTopLeftRadius: 27,
        }}
      >
        <View style={{ flex: 1 }}>
          <NavitageButton title="CONFIGURATION" screen="Configuration" />
          <NavitageButton title="MEASUREMENT" screen="Measurement" />
          <NavitageButton title="HISTORY" screen="History" />
          <NavitageButton title="TRAINING" screen="Training" />
        </View>
      </View>
    </View>
  );
}
