import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import NamesScreen from './screens/NamesScreen';
import QuotesScreen from './screens/QuotesScreen';
import RemindersScreen from './screens/RemindersScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="99 Names"
          component={NamesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reminders"
          component={RemindersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="alarm" size={size} color={color} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
