import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import Italien from "./Screens/Italian"; // make sure this file exists
import French from "./Screens/French";
import Tunisian from "./Screens/Tunisian";
import Mexican from "./Screens/Mexican";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // hide default header bar
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Italien" component={Italien} />
           <Stack.Screen name="French" component={French} />
        <Stack.Screen name="Tunisian" component={Tunisian} />
        <Stack.Screen name="Mexican" component={Mexican} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
