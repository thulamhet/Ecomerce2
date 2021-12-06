import { useNavigation } from "@react-navigation/core";
import { Text } from "native-base";
import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import colors from '../../constants/colors';
const Women = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.banner, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('DetailCategoryScreen')}
            >
                <Text fontSize='3xl' bold style={{ color: '#ffff' }}>SUMMER SALES</Text>
                <Text fontSize='xs' bold style={{ color: '#ffff' }}>Up to 69% off</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>

            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>

            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>

            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.banner, backgroundColor: colors.white }}>

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
        height: 140,
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
    }
})

export default Women;