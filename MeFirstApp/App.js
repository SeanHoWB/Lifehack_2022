import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiperscreen from './components/Swiper.js';
import Homescreen from './components/Homescreen.js';

const handlePress = () => {
  console.log("Test run")
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Swiperscreen" component={Swiperscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
