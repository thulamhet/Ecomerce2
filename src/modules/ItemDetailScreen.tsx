import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { Layout, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import icons from '../constants/icons';
import { changeItem } from '../redux/action/cartAction';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import Annouce from '../components/PopAnnounce';
import { Alert, SearchIcon, Text } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IItemDetailScreenProps {
    route: any,
    navigation: any,
    cart: any,
    changeItem: (data: any) => void;
}
const ItemDetailScreen = (props: IItemDetailScreenProps) => {

    const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));
    const [selectedColor, setSelectedColor] = React.useState(new IndexPath(0));
    const { route, navigation, cart, changeItem } = props;
    const { item } = route.params;
    //@ts-ignore
    const renderItem = ({ item }) => {
        return (
            <View style={{ width: 275, height: 413, marginVertical: 10, marginRight: 5 }}>
                <Image source={item} style={{ flex: 1, width: 275, height: 413, borderRadius: 2 }} />
            </View>
        )
    }
    const data = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
    ];
    const displaySizeValue = data[selectedSize.row];
    const displayColorValue = data[selectedColor.row];

    //@ts-ignore
    const renderOption = (title) => (
        <SelectItem title={title} />
    );

    const { items } = cart;

    const storeData = async (cart: any) => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(cart));
        } catch (e) {
          // saving error
        }
      }

    const addToBag = () => {
        let updateItem = {}
        const array = [...items, item];
        updateItem = { ...cart, items: array };
        changeItem(updateItem);
        storeData(updateItem);
    }

    useEffect(() => {
        console.log('[List item in detail]: ', cart)
    }, [])

    return (
        <Layout style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image style={styles.backIcon} source={icons.back} />
                </TouchableOpacity>
                <Text fontSize='2xl' bold style={styles.title}>Short dress</Text>
                <TouchableOpacity onPress={() => { console.log(item.uri) }}>
                    <SearchIcon size="5" color='black' />
                </TouchableOpacity>
            </View>

            <View style={{ height: 413 }}>
                <FlatList
                    data={item.uri}
                    renderItem={renderItem}
                    keyExtractor={item => item.uri}
                    horizontal={true}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                <Text>Size:</Text>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displaySizeValue}
                    selectedIndex={selectedSize}
                    onSelect={index => setSelectedSize(index)}>
                    {data.map(renderOption)}
                </Select>
                <Text>Color:</Text>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayColorValue}
                    selectedIndex={selectedColor}
                    onSelect={index => setSelectedColor(index)}>
                    {data.map(renderOption)}
                </Select>
            </View>

            <View style={styles.infoView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.brand}>H&M</Text>
                    <Text style={styles.brand}>{item.price}</Text>
                </View>
                <Text>{item.title}</Text>
            </View>

            <View style={styles.addView}>
                <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() => {
                        addToBag()
                    }}
                >
                    <Text style={{ color: colors.white }}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>

        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGray,
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
    },
    backIcon: {
        width: 30,
        height: 30
    },
    title: {
        // fontSize: 24,
        // fontWeight: 'bold',
    },
    select: {
        width: 150,
        height: 45,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
    },
    infoView: {
        marginHorizontal: 15,
    },
    brand: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    addView: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 112,
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,

    },
    addBtn: {
        backgroundColor: colors.green2,
        width: 348,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = (state: any) => {
    const { cartReducer } = state;
    return { cart: cartReducer };
};
export default connect(mapStateToProps, { changeItem: changeItem })(ItemDetailScreen);