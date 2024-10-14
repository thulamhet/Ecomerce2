import { useNavigation } from "@react-navigation/core";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "native-base";
import React from "react"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import colors from '../../constants/colors';
const Women = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.banner, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                onPress={() => navigation.navigate('DetailCategoryScreen', {title: 'WINTER SALES'})}
            >
                <Text fontSize='3xl' bold style={{ color: '#ffff' }}>WINTER SALES</Text>
                <Text fontSize='xs' bold style={{ color: '#ffff' }}>Up to 69% off</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}
                onPress={() => navigation.navigate('DetailCategoryScreen', {title: 'NEW'})}

            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>NEW</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/98/28/24/9828246ca8bdbdb6839c749f46b8c481.jpg' }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}
                onPress={() => navigation.navigate('DetailCategoryScreen', {title: 'STREET'})}
                >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>STREET</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/60/a6/71/60a6717d98e437019d1163927b250d8e.jpg' }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>DRESS</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/90/19/50/90195062a72f599d5be2e5fd2af5d14f.jpg' }} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.lightGray
    },
    banner: {
        backgroundColor: colors.red,
        height: 165,
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row'
    },
    img: {
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})

export default Women;