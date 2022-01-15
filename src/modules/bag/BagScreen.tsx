import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Fab, Icon, MinusIcon, AddIcon, CloseIcon } from "native-base";
import React, { useEffect, useState } from "react"
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native"
import { connect } from "react-redux";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import { changeItem } from '../../redux/action/cartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IBagScreenProps {
    cart: any,
    changeItem: any,
}

const BagScreen = (props: IBagScreenProps) => {
    // const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        const getData = async () => {
            try {
                const myCart = await AsyncStorage.getItem('@MySuperStore:key');
                if (myCart !== null) {

                    changeItem(JSON.parse(myCart));
                    // setItems(myCart)
                    console.log(JSON.parse(myCart));
                }
            } catch (error) {
                // Error retrieving data
                console.log(error);
            }
        }
        // const a = getData();
        getData()
    }, [])
    const { cart, changeItem } = props;
    const { items } = cart;
    const navigation: NavigationProp<any> = useNavigation();

    const storeData = async (cart: any) => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(cart));
        } catch (e) {
            // saving error
        }
    }
    const removeItem = (data: any) => {
        let arr: any = [];
        items.forEach((e: any) => {
            if (e.id !== data.id) arr.push(e);
        });
        const updateItem = { ...cart, items: arr };
        changeItem(updateItem);
        storeData(updateItem);
        console.log('xx', updateItem)
    }

    //@ts-ignore
    const renderItem = ({ item }) => {
        return (
            <View
                style={styles.itemView}

            >
                <Image source={item.uri[0]} style={{ width: 130, height: 130, borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} />
                <View style={{ paddingHorizontal: 15, marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 4 }}>{item.title}</Text>

                    <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                        <Text style={{ color: colors.mildGray, fontSize: 16 }}>Color: </Text>
                        <Text style={{ fontSize: 16 }}>Blue</Text>
                        <Text style={{ color: colors.mildGray, marginLeft: 20, fontSize: 16 }}>Size: </Text>
                        <Text style={{ fontSize: 16 }}>L</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 12 }}>
                        <TouchableOpacity style={{ ...styles.circle }}
                            onPress={() => {
                                count >= 1 && setCount(count - 1);
                            }}
                        >
                            <MinusIcon style={{ marginBottom: 8, marginRight: 2 }} size="3" color="black" />
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 16,
                            marginHorizontal: 10,
                            alignSelf: 'center'
                        }}>{count}</Text>

                        <TouchableOpacity style={{ ...styles.circle, justifyContent: 'center' }}
                            onPress={() => setCount(count + 1)}
                        >
                            <AddIcon size="3" color="black" />
                        </TouchableOpacity>

                        <Text style={{ marginLeft: 70, marginTop: 10, fontSize: 14 }}>{item.price}</Text>

                    </View>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 1,
                            right: -20,
                            width: 20,
                            height: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => { removeItem(item) }}>
                        {/* <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.heart} /> */}
                        < CloseIcon size="4" mt="0.5" color="black" style={{ marginLeft: 12, marginTop: 6 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Text style={{ margin: 15, fontSize: 25, fontWeight: 'bold' }} >My Bag</Text>
            <View style={{ marginBottom: 212 }}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.index}
                // horizontal={true}
                />
            </View>
            <View style={styles.coView}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ marginBottom: 40, fontSize: 20, fontWeight: '600', color: colors.mildGray, marginLeft: 0 }}>Total amount: </Text>
                    <Text style={{ marginBottom: 40,  fontSize: 20, fontWeight: '600', marginLeft: 210}}>113$ </Text>
                </View>
                <TouchableOpacity
                    style={styles.coBtn}
                    onPress={() => {

                        navigation.navigate('CheckOut')

                    }}>
                    <Text style={{ color: colors.white }}>CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 100,
        paddingTop: 50,
        backgroundColor: colors.lighterGray,

    },
    itemView: {
        flex: 1,
        // paddingHorizontal: 15,
        flexDirection: 'row',
        marginHorizontal: 14,
        margin: 8,
        backgroundColor: colors.white,
        shadowColor: colors.darkGray,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderRadius: 8,

    },
    coView: {
        backgroundColor: colors.lighterGray,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // height: 112,
        position: 'absolute',
        bottom: 0,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 5,
        //     height: 5
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 4,
        // elevation: 5,
    },
    coBtn: {
        backgroundColor: colors.green2,
        width: 348,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    circle: {
        shadowColor: colors.mildGray,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        borderColor: colors.lightGray

    }
})

const mapStateToProps = (state: any) => {
    const { cartReducer } = state;
    return { cart: cartReducer };
};
export default connect(mapStateToProps, { changeItem: changeItem })(BagScreen);