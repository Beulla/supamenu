import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './android/pages/startPage';
import SignUpPage from './android/pages/SignUpPage';
import SignInPage from './android/pages/SignInPage';
import FindRestaurant from './android/pages/FindRestaurant';
import  Menu  from './android/pages/Menu';
import RestoHome from './android/pages/restoHome';
import RestoOrder from './android/pages/RestoOrder';
import Drinks from './android/pages/Drinks';
import Checkout from './android/pages/Checkout';
const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      
    <Stack.Navigator>
      {/* <Stack.Screen name="start" component={StartPage} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="signup" component={SignUpPage} options={{headerShown:false}}/>
      <Stack.Screen name="signIn" component={SignInPage} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="searchRestaurant" component={FindRestaurant} options={{headerShown:false}}/>
      <Stack.Screen name="restaurant" component={Menu} options={{headerShown:false}}/>
      <Stack.Screen name="home" component={RestoHome} options={{headerShown:false}}/> */}
      <Stack.Screen name="order" component={RestoOrder} options={{headerShown:false}}/>
      <Stack.Screen name="drinks" component={Drinks} options={{headerShown:false}}/>
      <Stack.Screen name="checkout" component={Checkout} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

