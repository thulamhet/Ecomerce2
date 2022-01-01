import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../constants/colors";

const Register = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <TouchableOpacity style={styles.registerBtn}
                onPress={() => {navigation.navigate('LoginScreen')}}
                >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerBtn: {
        backgroundColor: colors.blue,
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    }
})

export default Register;