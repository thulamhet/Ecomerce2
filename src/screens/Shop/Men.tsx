import { Text } from "native-base";
import React from "react"
import { StyleSheet, View } from "react-native"
import colors from '../../constants/colors';
const Men = () => {
    return (
        <View style={styles.container}>
            <View style={{...styles.banner, justifyContent: 'center', alignItems: 'center'}}>
                <Text fontSize='3xl' bold style={{color: '#ffff'}}>SUMMER SALES</Text>
                <Text fontSize='xs' bold style={{color: '#ffff'}}>Up to 69% off</Text>
            </View>
            <View style={{...styles.banner, backgroundColor: colors.white}}>
                
            </View>
            <View style={{...styles.banner, backgroundColor: colors.white}}>
                
            </View>
            <View style={{...styles.banner, backgroundColor: colors.white}}>
                
            </View>
            <View style={{...styles.banner, backgroundColor: colors.white}}>
                
            </View>
          
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

export default Men;