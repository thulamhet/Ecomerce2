import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { SvgXml } from 'react-native-svg';
import { SvgCss } from 'react-native-svg';
// import  from "../../assets/images/wave.svg"

const xml = `
  <svg width="32" height="32" viewBox="0 0 32 32">
    <style>
      .red {
        fill: #ff0000;
      }
    </style>
    <rect class="red" x="5" y="5    " width="32" height="32" />
  </svg>
`;
const Login = () => {
    const navigation: NavigationProp<any> = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <SvgCss xml={xml} width="50%" height="50%" />
            <TouchableOpacity style={styles.registerBtn}
                onPress={() => { navigation.navigate('RegisterScreen') }}
            >
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn}
                onPress={() => { navigation.navigate('Main') }}
            >
                <Text>Main</Text>
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

export default Login;