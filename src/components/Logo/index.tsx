import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './LogoStyles';
import LogoImage from '../../../assets/logo.jpeg';

export function Logo() {
  return (
    <View >
      <View>
        <Text style={styles.title}>Gerador de Senhas</Text>
      </View>
        <Image 
        source={LogoImage}
        style={styles.logo}
        />
    </View>
  );
}