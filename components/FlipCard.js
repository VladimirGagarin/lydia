// components/FlipCard.js
import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

export default function FlipCard({ item }) {
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
    rotation.value = withTiming(flipped ? 0 : 180, { duration: 500 });
  };

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotation.value}deg` }],
    opacity: rotation.value < 90 ? 1 : 0,
    zIndex: rotation.value < 90 ? 1 : 0,
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotation.value + 180}deg` }],
    opacity: rotation.value >= 90 ? 1 : 0,
    zIndex: rotation.value >= 90 ? 1 : 0,
  }));

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        {/* Front Side */}
        <Animated.View style={[styles.card, frontStyle]}>
          <BlurView intensity={80} tint="light" style={styles.blurCard}>
            <Text style={styles.number}>#{item.number}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.language}>{item.language}</Text>
          </BlurView>
        </Animated.View>

        {/* Back Side */}
        <Animated.View style={[styles.card, styles.backCard, backStyle]}>
          <Image source={item.image} style={styles.fullImage} resizeMode="cover" />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: height * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  },
  blurCard: {
    flex: 1,
    padding: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  number: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  language: {
    fontSize: 16,
    color: 'maroon',
    fontStyle: 'italic',
    marginTop: 5,
  },
  backCard: {
    backgroundColor: '#000',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
description: {
  fontSize: 14,
  color: '#333',
  textAlign: 'center',
  fontStyle: 'italic',
  fontWeight: 'bold'
},

});
