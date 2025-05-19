import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const openWebsite = () => {
    Linking.openURL('https://vladimirgagarin.github.io/Lydiah/');
  };

  return (
    <LinearGradient
      colors={['#CC6CE7', '#392140']}
      style={styles.container}
    >
      <View style={styles.imageGlow}>
        <Image source={require('../assets/logo.jpg')} style={styles.image} />
      </View>

      <Text style={styles.name}>Belleza De Lydiah (Lydez Hialy)</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>✨ More Content Online</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
    borderWidth: 6,
    borderColor: '#fffaf0',
    shadowColor: '#ff99cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffb6c1',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#5e004f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageGlow: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#1B1616',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffb6c1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    marginBottom: 20,
  },

});
