import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../constants/colors";

const Success = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <ImageBackground source={{uri: 'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg'}} style={styles.container}>
            <TouchableOpacity
                style={styles.coBtn}
                onPress={() => {

                    navigation.navigate('Home')

                }}>
                <Text style={{ color: colors.white }}>Continue Shopping</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    coBtn: {
        backgroundColor: colors.green2,
        width: 348,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },
})

export default Success;