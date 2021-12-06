import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import HomeScreen from './modules/HomeScreen';
import ItemDetailScreen from './modules/ItemDetailScreen';
import TestScreen from './modules/BagScreen';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import StreetClothesScreen from './modules/StreetClothesScreen';
import Shop from './modules/shop/ShopScreen';
import BagScreen from './modules/BagScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import FavouriteScreen from './modules/FavouriteScreen';
import { CheckIcon, NativeBaseProvider } from 'native-base';
import Men from './modules/shop/Men';
import Women from './modules/shop/Women';
import ProfileScreen from './modules/profile/ProfileScreen';
import { Image } from 'react-native';
import icons from './constants/icons';
import DetailCategoryScreen from './modules/share/DetailCategoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Street Clothes" component={StreetClothesScreen} />
      <Stack.Screen name="Item Detail" component={ItemDetailScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light }}>
      <NativeBaseProvider>
        <NavigationContainer >
          <Provider store={store}>
            <Tab.Navigator screenOptions={
              { headerShown: false }

              // ({ route }) => ({
              //   tabBarIcon: ({ color, size }) => {
              //     // const icons = {
              //     //   Home: 'home',
              //     //   Profile: 'account',
              //     // };

              //     return (
              //       // <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.heart} />
              //       <CheckIcon size="5" mt="0.5" color="emerald.500" />
              //     );
              //   },

              // }
              // )


            }
            >
              <Tab.Screen name="DetailCategoryScreen" component={DetailCategoryScreen} />
              <Tab.Screen name="Home" component={HomeNavigator} />
              <Tab.Screen name="Shop" component={Shop} />
              <Tab.Screen name="Bag" component={BagScreen} />
              <Tab.Screen name="Favourite" component={FavouriteScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </Provider>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApplicationProvider>
  )
}

export default App;