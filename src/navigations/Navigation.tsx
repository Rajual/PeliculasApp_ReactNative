import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { DetailScreen } from '../screens/DetailScreen';

const Stack = createStackNavigator();

export const Navigation=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Details" component={DetailScreen} />
      
      </Stack.Navigator>
  );
}