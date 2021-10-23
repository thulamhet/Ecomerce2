import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import TestScreen from './screens/test';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import StreetClothesScreen from './screens/StreetClothesScreen';
import Shop from './screens/ShopScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home Screen" component={HomeScreen}/>
      <Stack.Screen name="Street Clothes" component={StreetClothesScreen}/>
      <Stack.Screen name="Item Detail" component={ItemDetailScreen}/>
    </Stack.Navigator>
  )
}

const App = () => { 
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light}}>
      <NavigationContainer >
      <Tab.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeNavigator}/>
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Bag" component={TestScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
)}

export default App;