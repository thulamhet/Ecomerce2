import { useNavigation } from "@react-navigation/core";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "native-base";
import React from "react"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import colors from '../../constants/colors';
const Men = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.banner, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                onPress={() => navigation.navigate('DetailCategoryScreen')}
            >
                <Text fontSize='3xl' bold style={{ color: '#ffff' }}>WINTER SALES</Text>
                <Text fontSize='xs' bold style={{ color: '#ffff' }}>Up to 69% off</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>NEW</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/d9/e2/a6/d9e2a66e76232333ffa378a7f5d5ca58.jpg' }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>VINTAGE</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/aa/79/66/aa796662bb06d3bb6b8f2d8d0472a16a.jpg' }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>OLD SCHOOL</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/474x/46/b7/0c/46b70cd223dc227d07c4140e63e921ab.jpg' }} />
            </TouchableOpacity>

            {/* <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>NEW</Text>
                </View>
                <Image style={styles.img} source={{ uri: 'https://64.media.tumblr.com/5596701b4dc3a347c20c102b4a5f0b41/707e3e2173cd6848-a7/s1280x1920/fccaff62147af661ce916a0307a518acae105af2.jpg' }} />
            </TouchableOpacity> */}

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

export default Men;