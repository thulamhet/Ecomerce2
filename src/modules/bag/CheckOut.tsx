import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import { Fab, Icon, MinusIcon, CloseIcon, ArrowBackIcon, ChevronLeftIcon, Text } from "native-base";

const CheckOut = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <ChevronLeftIcon size="5" mt="0.5" color="black" style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Checkout</Text>
                </View>

            </View>

            <View style={{ flex: 1, padding: 10, backgroundColor: colors.lighterGray }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Shipping Address</Text>
                    <View style={styles.addressView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Thu Nguyen</Text>
                            <Text style={{ color: colors.green2 }}>Change</Text>
                        </View>
                        <Text style={{ marginTop: 20 }}>Ngo a My Dinh 1 Ha Noi Viet Nam</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Payment</Text>
                        <Text style={{ color: colors.green2, marginRight: 35 }}>Change</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...styles.addressView, width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBicYpVz7GxVY-x639KpFtC9F6VF9yItNy0v_INQ_zJWjqUJ4VPECteVMhweiLYCIRhRs&usqp=CAU' }} style={styles.img} />
                        </View>
                        <Text style={{ alignSelf: 'center', fontSize: 14, marginLeft: 20 }}>**** **** **** 1307</Text>
                    </View>

                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 50 }}>Delivery Method</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...styles.addressView, width: 120, height: 80, padding: 2, paddingHorizontal: 2 }}>
                            <Image source={{ uri: 'https://iptime.com.vn/wp-content/uploads/2019/11/FedEx_logo.jpg' }} style={{ width: 120, height: 70 }} />
                        </View>

                        <View style={{ ...styles.addressView, width: 120, height: 80, padding: 2, paddingHorizontal: 2 }}>
                            <Image source={{ uri: 'https://assets.parcelperform.com/pp-web-app-assets/logo-carriers/square-logo-carries/uspsgl.png' }} style={{ width: 120, height: 70 }} />
                        </View>
                        
                        <View style={{ ...styles.addressView, width: 120, height: 80, padding: 2, paddingHorizontal: 2 }}>
                            <Image source={{ uri: 'https://gatewayexpress.vn/wp-content/uploads/2020/07/logo-dhl-1.png' }} style={{ width: 115, height: 70 }} />
                        </View>

                    </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12, marginHorizontal: 8}}>
                            <Text style={{color: colors.mildGray, fontSize: 16, fontWeight: '400'}}>Order: </Text>
                            <Text style={{fontSize: 16, fontWeight: '600'}}>112$</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12, marginHorizontal: 8}}>
                            <Text style={{color: colors.mildGray, fontSize: 16, fontWeight: '400'}}>Delivery: </Text>
                            <Text style={{fontSize: 16, fontWeight: '600'}}>112$</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12, marginHorizontal: 8}}>
                            <Text style={{color: colors.mildGray, fontSize: 20, fontWeight: '800'}}>Summary: </Text>
                            <Text style={{fontSize: 20, fontWeight: '800'}}>112$</Text>
                        </View>


                </View>
            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white,
        marginBottom: 150,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: colors.white,
        height: 60,
        borderBottomWidth: 1,
        borderColor: colors.lightGray

    },
    backIcon: {
        width: 30,
        height: 36,
        marginLeft: 8
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        marginLeft: 125,
        alignSelf: 'center',
        marginTop: 4
    },
    addressView: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 380,
        height: 150,
        borderWidth: 0.2,
        borderColor: colors.mildGray,
        borderRadius: 8,
        margin: 8,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    img: {
        width: 50,
        height: 50
    }

})

export default CheckOut;