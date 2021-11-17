import { useNavigation } from "@react-navigation/native";
import { SearchIcon, Text, Divider, ChevronRightIcon } from "native-base";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { black_people } from "../../constants/images";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SearchIcon size="5" mt="0.5" color="black" style={styles.searchIcon} />
            </View>
            <View>
                <Text fontSize='4xl' bold>My profile</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={black_people} style={styles.avtImg} />
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text fontSize='2xl' bold style={{ marginTop: 20 }}>Head in the clouds</Text>
                        <Text fontSize='md' >bigbrain2k1@gmail.com</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{ padding: 10 }}
                //@ts-ignore
                onPress={() => { navigation.navigate('MyOrders') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>My orders</Text>
                        <Text fontWeight='thin'>Already have 12 orders</Text>
                    </View>
                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>Shipping Addresses</Text>
                        <Text fontWeight='thin'>3 addresses</Text>
                    </View>
                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>Payment method</Text>
                        <Text fontWeight='thin'>Visa **69</Text>
                    </View>
                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>Promocodes</Text>
                        <Text fontWeight='thin'>You have special promocodes</Text>
                    </View>

                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>My review</Text>
                        <Text fontWeight='thin'>Review for 4 items</Text>
                    </View>

                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text fontSize='2xl' bold>Settings</Text>
                        <Text fontWeight='thin'>Notifications, password</Text>
                    </View>

                    <ChevronRightIcon size="5" mt="0.5" color="black" />
                </View>
                <Divider my="2" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        padding: 10,
    },
    searchIcon: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    avtImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 15,
    }
})

export default ProfileScreen;