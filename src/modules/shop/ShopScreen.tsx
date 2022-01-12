import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react"
import { View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Layout } from '@ui-kitten/components';
import Men from "./Men";
import Women from "./Women";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, SearchIcon } from "native-base";

const Tab = createMaterialTopTabNavigator();

const ShopNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Men" component={Men} />
            <Tab.Screen name="Women" component={Women} />
            {/* <Tab.Screen name="Kid" component={Kid} /> */}
        </Tab.Navigator>
    )
}
4
const Shop = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <Layout style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { () => { } }}>
                    {/* <Image style={styles.backIcon} source={icons.back} /> */}
                </TouchableOpacity>
                <Text fontSize='xl' bold style={{ fontSize: 22, marginRight: 0 }}>Categories</Text>
                <TouchableOpacity onPress={() => { () => { } }}>
                    {/* <SearchIcon size="5" mt="0.5" color="black" style={styles.backIcon} /> */}
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
        alignItems: 'center',
        // backgroundColor: colors.white,
        marginTop: 50,
        paddingHorizontal: 15,
    },
    body: {

    },
    backIcon: {
        width: 24,
        height: 24
    },
    navBar: {

    }
})

export default Shop;