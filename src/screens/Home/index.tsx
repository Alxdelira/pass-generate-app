import { Text, View } from 'react-native'
import styles from './Style'
import React from 'react'
import { Logo } from '../../components/Logo'
import { PassInput } from '../../components/PassInput'
import { StatusBar } from 'expo-status-bar'
import { PassButton } from '../../components/PassButton'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <PassButton />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

