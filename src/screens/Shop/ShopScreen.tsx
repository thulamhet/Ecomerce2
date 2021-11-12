import { useNavigation } from "@react-navigation/native";
import React from "react"
import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import icons from "../../constants/icons";
import { Layout } from '@ui-kitten/components';
import Men from "./Men";
import Women from "./Women";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Kid from "./Kid";
import { Text, SearchIcon } from "native-base";

const Tab = createMaterialTopTabNavigator();

const ShopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Men" component={Men} />
      <Tab.Screen name="Women" component={Women} />
      <Tab.Screen name="Kid" component={Kid} />
    </Tab.Navigator>
  )
}

const Shop = () => {
  const navigation = useNavigation();
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { () => { } }}>
          <Image style={styles.backIcon} source={icons.back} />
        </TouchableOpacity>
        <Text fontSize='2xl' bold >Categories</Text>
        <TouchableOpacity onPress={() => { () => { } }}>
          <SearchIcon size="5" mt="0.5" color="black" style={styles.backIcon}/>
        </TouchableOpacity>
      </View>
      <ShopNavigator />

    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: colors.white,
    marginTop: 50,
  },
  body: {

  },
  backIcon: {
    width: 30,
    height: 30
  },
  navBar: {

  }
})

export default Shop;