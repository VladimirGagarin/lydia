import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Names from '../components/Litany';
import FlipCard from '../components/FlipCard';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

// Create an animatable image component
const AnimatableImage = Animatable.createAnimatableComponent(Image);


export default function NamesScreen() {
  const sparkleRef = useRef(null);
  const [showSparkle, setShowSparkle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const triggerSparkle = () => {
    setShowSparkle(true);
    sparkleRef.current?.fadeIn(200)
      .then(() => sparkleRef.current?.pulse(400))
      .then(() => sparkleRef.current?.fadeOut(300));
  };

  return (
     <Animatable.View animation="zoomIn" duration={600} style={{ flex: 1 }}>
    <LinearGradient colors={['#CC6CE7', '#392140']} style={styles.gradient}>
      <Carousel
        loop
        width={width}
        height={height * 0.75}
        data={Names}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
        <Animatable.View
          animation={index === currentIndex ? 'fadeIn' : undefined}
          duration={600}
          style={styles.cardWrapper}
        >
          <FlipCard item={item} />
        </Animatable.View>
      )}


        onSnapToItem={(index) => {
          setCurrentIndex(index);
          triggerSparkle();
        }}

      />


      {/* Sparkle Heart Animation */}
      {showSparkle && (
        <AnimatableImage
          ref={sparkleRef}
          source={require('../assets/heart.png')} // Make sure this file exists
          style={styles.sparkle}
          resizeMode="contain"
        />
      )}
    </LinearGradient>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.75,
  },
  card: {
    width: width * 0.85,
    height: height * 0.75,
    borderRadius: 30,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#0056b3',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  sparkle: {
    position: 'absolute',
    top: height / 2 - 50,
    left: width / 2 - 50,
    width: 100,
    height: 100,
    zIndex: 100,
  },
  language: {
    fontSize: 14,
    color: '#FFD700',
    fontStyle: 'italic',
    marginTop: 5,
  }

});
