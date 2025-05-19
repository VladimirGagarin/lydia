import React, { useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import * as Clipboard from 'expo-clipboard';
import * as Animatable from 'react-native-animatable';
import { BlurView } from 'expo-blur';


const { width, height } = Dimensions.get('window');

const quotes = [
    // Self-worth & Authenticity
    "The world needs you to be you — Lydiah Wambui.",
    "Your presence heals like sunlight — Lydiah Wambui.",
    "You are not broken; you are becoming — Lydiah Wambui.",
    "You carry galaxies inside — Lydiah Wambui.",
    "You are worthy, even when the world forgets — Lydiah Wambui.",
    "You are the poetry of existence — Lydiah Wambui.",

    // Love
    "Lydiah Wambui, you are the harmony in my chaos.",
    "The stars pale before the light in your soul — Lydiah Wambui.",
    "In your silence, I hear the wisdom of galaxies — Lydiah Wambui.",
    "Your love is the language the universe forgot to teach — Lydiah Wambui.",
    "Love doesn't find you. It waits where you left your truth — Lydiah Wambui.",

    // Life & Purpose
    "Every breath is a second chance — Lydiah Wambui.",
    "You were not made to shrink for comfort — Lydiah Wambui.",
    "The path is not crowded when you walk your truth — Lydiah Wambui.",
    "Even the storm makes way for you — Lydiah Wambui.",
    "Let your life echo beyond your fears — Lydiah Wambui.",

    // Time & Patience
    "Time bends for the brave — Lydiah Wambui.",
    "Not all growth is visible, but all of it is real — Lydiah Wambui.",
    "Moments matter more than milestones — Lydiah Wambui.",
    "Healing takes time, but it also takes truth — Lydiah Wambui.",

    // Inner Peace & Stillness
    "Peace isn't found; it's remembered — Lydiah Wambui.",
    "The quieter you become, the clearer your truth — Lydiah Wambui.",
    "Your soul knows the way — Lydiah Wambui.",
    "Stillness is not weakness. It is wisdom resting — Lydiah Wambui.",

    // Hope
    "Hope is the whisper that survives the storm — Lydiah Wambui.",
    "You are living proof that light returns — Lydiah Wambui.",

    // Fear
    "Fear visits, but it doesn’t get to stay — Lydiah Wambui.",
    "Beyond fear lies everything you were born for — Lydiah Wambui.",

    // Regret
    "Regret is not your home. Growth is — Lydiah Wambui.",
    "You are allowed to rewrite the ending — Lydiah Wambui.",
    // More Regret
    "Mistakes are proof you tried — Lydiah Wambui.",
    "You are not your past decisions — Lydiah Wambui.",
    "Forgive yourself for not knowing then what you know now — Lydiah Wambui.",

    // Courage
    "Courage is choosing to show up, even when afraid — Lydiah Wambui.",
    "Your bravery plants seeds for tomorrow — Lydiah Wambui.",
    "Every small step forward is a victory — Lydiah Wambui.",

    // Life 
    "You don’t live life. You awaken to it — Lydiah Wambui.",
    "Life is not a race; it’s a rhythm — Lydiah Wambui.",
    "Let your days be guided by meaning, not noise — Lydiah Wambui.",
    "Life speaks through the moments you almost missed — Lydiah Wambui.",
    "Every sunrise is life saying, ‘Try again’ — Lydiah Wambui.",

    //Choice
    "Every choice is a seed. Choose what you want to grow — Lydiah Wambui.",
    "You choose who you become every time you say yes or no — Lydiah Wambui.",
    "Freedom is hidden in the courage to choose differently — Lydiah Wambui.",
    "Not choosing is still a choice. Make it count — Lydiah Wambui.",
    "Choices shape futures more than chances ever will — Lydiah Wambui.",

      // New Quotes
      "You are the author of your own becoming — Lydiah Wambui.",
      "Let kindness be your legacy — Lydiah Wambui.",
      "Rest is not a reward; it is a right — Lydiah Wambui.",
      "Your dreams are valid, no matter their size — Lydiah Wambui.",
      "Growth begins where comfort ends — Lydiah Wambui.",
      "You are enough, even on your quietest days — Lydiah Wambui.",
      "Let gratitude be your compass — Lydiah Wambui.",
      "You are the light you keep searching for — Lydiah Wambui.",
      "Healing is a journey, not a destination — Lydiah Wambui.",
      "Your story matters, even if only to you — Lydiah Wambui.",

      "Let your heart be the compass when the path is unclear — Lydiah Wambui.",
      "Dreams are the seeds of tomorrow’s miracles — Lydiah Wambui.",
      "Your light is a gift the world cannot replace — Lydiah Wambui.",
      "Even the smallest act of love echoes forever — Lydiah Wambui.",
      "Let your spirit dance in the rain of possibility — Lydiah Wambui.",
      "Every ending is a doorway to a new beginning — Lydiah Wambui.",
      "Your kindness is a revolution in a weary world — Lydiah Wambui.",
      "Let your courage outshine your doubts — Lydiah Wambui.",
      "Beauty blooms in the cracks of adversity — Lydiah Wambui.",
      "Trust the magic of beginnings — Lydiah Wambui.",
      "Your voice can move mountains — Lydiah Wambui.",
      "Let hope be your anchor in restless seas — Lydiah Wambui.",
      "Shine so brightly that others find their way — Lydiah Wambui.",
      "Your dreams are the stars guiding you home — Lydiah Wambui.",

      "Within every riddle, a truth quietly waits — Lydiah Wambui.",
      "Let your questions be lanterns in the dark — Lydiah Wambui.",
      "Some answers are found only in the silence between words — Lydiah Wambui.",
      "Life is a poem written in invisible ink — Lydiah Wambui.",
      "To seek is to dance with the unknown — Lydiah Wambui.",
      "Every mystery is an invitation to wonder — Lydiah Wambui.",
      "Let your curiosity be the compass of your soul — Lydiah Wambui.",
      "The heart speaks in riddles only the brave can solve — Lydiah Wambui.",
      "Dreams are puzzles the night gives the mind — Lydiah Wambui.",
      "Sometimes the question is the answer you need — Lydiah Wambui.",
];


const photo = require('../assets/img1.jpg');

export default function QuotesScreen() {
  
  const handleCopy = async (text) => {
    await Clipboard.setStringAsync(text);
    Alert.alert('Copied!', 'Quote copied to clipboard');

  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height * 0.75}
        data={quotes}
        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <BlurView intensity={60} tint="light" style={styles.card}>
              <Image source={photo} style={styles.image} />
              <Text style={styles.quote}>"{item}"</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleCopy(item)}>
                <Text style={styles.buttonText}>Copy Quote</Text>
              </TouchableOpacity>
            </BlurView>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260b33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.85,
    height: height * 0.75,
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // fallback for older devices
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20,
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff9ff3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: '#260b33',
    fontWeight: 'bold',
  },
});

