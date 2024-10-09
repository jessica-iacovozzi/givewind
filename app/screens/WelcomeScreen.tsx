import { Image, Text, View, ImageBackground, StyleSheet } from 'react-native'

import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text>Sell And Donate</Text>
      </View>
    <View style={styles.loginButton} />
    <View style={styles.registerButton} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  loginButton: {
    height: 80,
    width: '100%',
    backgroundColor: colors.primary
  },
  registerButton: {
    height: 80,
    width: '100%',
    backgroundColor: colors.secondary
  }
})
