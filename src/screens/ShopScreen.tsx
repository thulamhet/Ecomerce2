import { useNavigation } from "@react-navigation/native";
import React from "react"
import { View,StyleSheet, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";
import { Layout, Text } from '@ui-kitten/components';
import colors from "../constants/colors";


const Shop = () => {
  const navigation = useNavigation();
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { () => { } }}>
          <Image style={styles.backIcon} source={icons.back} />
        </TouchableOpacity>
        <Text category='h6'>Categories</Text>
        <TouchableOpacity onPress={() => { () => { } }}>
          <Image style={styles.backIcon} source={icons.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.navBar}>

        </View>
      </View>
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
  body:{

  },
  backIcon: {
    width: 30,
    height: 30
  },
  navBar: {
    
  }
})

export default Shop;