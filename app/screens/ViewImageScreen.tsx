import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.iconsContainer}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
      </View>
      <Image resizeMode='contain' source={require("../assets/chair.jpg")} style={styles.image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 'auto'
  },
  imageContainer: {
    flex: 1,
    backgroundColor: colors.black
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30
  }
})
