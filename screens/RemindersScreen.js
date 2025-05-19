import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Vibration } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Platform } from 'react-native';


const dailyMessages = [
    "Smile more today 😊",
    "Be fearless 💪",
    "You are enough 🌟",
    "Breathe deeply 🌬️",
    "Start where you are 🛤️",
    "Be patient with yourself ❤️",
    "Today is a new gift 🎁",
    "Kindness is strength 🤝",
    "Progress, not perfection 🚀",
    "Trust your journey 🛤️",
    "Gratitude changes everything 🙏",
    "Stay curious and open-minded 🧠",
    "Rest is productive too 💤",
    "Celebrate small wins 🎉",
    "Let go of what you can't control 🌊",
];



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: Platform.OS !== 'web',
  }),
});

export default function RemindersScreen() {
  const [reminders, setReminders] = useState([]);
  const [input, setInput] = useState('');
  const [dailyReminder, setDailyReminder] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showConfetti, setShowConfetti] = useState(false);


  useEffect(() => {
    loadReminders();
    setupNotifications();
  }, []);

  const loadReminders = async () => {
    try {
      const saved = await AsyncStorage.getItem('reminders');
      if (saved) setReminders(JSON.parse(saved));
    } catch (e) {
      console.log('Error loading reminders:', e);
    }
  };

  const saveReminders = async (newList) => {
    try {
      await AsyncStorage.setItem('reminders', JSON.stringify(newList));
    } catch (e) {
      console.log('Error saving reminders:', e);
    }
  };

  const addReminder = async () => {
    if (input.trim() === '') {
        Alert.alert("Lydiah! Reminder can't be empty 😅");
        return;
    }

    const updated = [...reminders, input];
    setReminders(updated);
    saveReminders(updated);

    // 🔁 Moved up
    const triggerTime = new Date(selectedTime);
    const now = new Date();
    if (triggerTime < now) {
        triggerTime.setDate(triggerTime.getDate() + 1); // schedule for tomorrow
    }

    if (Platform.OS !== 'web') {
 
        await Notifications.scheduleNotificationAsync({
            content: {
            title: "Lydiah! Don't forget 🌸",
            body: input,
            },
            trigger: {
            hour: triggerTime.getHours(),
            minute: triggerTime.getMinutes(),
            repeats: false,
            },
        });
    }

    Vibration.vibrate(100); // Optional
    setShowConfetti(true);
    setInput('');
    setTimeout(() => setShowConfetti(false), 3000);
};


  const deleteReminder = (index) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
    saveReminders(updated);
  };

  const setupNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    const chosen = dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    setDailyReminder(chosen);

    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Lydiah Reminder 💌",
        body: chosen,
      },
      trigger: {
        hour: 8,
        minute: 0,
        repeats: true,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💖 Lydiah's Daily Reminders</Text>
      <Text style={styles.daily}>{dailyReminder}</Text>

      <Text style={styles.heading}>📝 Your Reminders</Text>

      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.reminderItem}>
            <Text>{item}</Text>
            <Button title="✖" onPress={() => deleteReminder(index)} />
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Add a reminder..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Reminder" onPress={addReminder} />
      <Button title="Pick Time" onPress={() => setShowPicker(true)} />
        {showPicker && (
        <DateTimePicker
            value={selectedTime}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, date) => {
            setShowPicker(false);
            if (date) setSelectedTime(date);
            }}
        />
        )}

        {showConfetti && (
        <ConfettiCannon count={30} origin={{ x: 200, y: 0 }} fadeOut />
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffe4e1', // fallback background (rosy)
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c71585',
    textAlign: 'center',
    marginVertical: 10,
  },
  daily: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#8b008b',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffc0cb',
    backgroundColor: '#fff0f5',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    fontSize: 16,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffeef8',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#ffb6c1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});

