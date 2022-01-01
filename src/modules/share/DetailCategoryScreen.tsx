import { useNavigation } from "@react-navigation/native";
import { SearchIcon, Text } from "native-base";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import images from "../../constants/images";
const listTemp = [images.woman, images.woman2, images.street_style]

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Sport Dress',
        uri: listTemp,
        price: '10$',
        sale: '10%'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Evening Dress',
        uri: listTemp,
        price: '12$',
        sale: '10%'

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'T Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'T Shirt',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        title: 'Silip Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Dau Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
];

const DATA2 = [
    {
        id: '1',
        category: 'Sale',
        data: DATA,
        title: 'Super summer sale'
    },
    {
        id: '2',
        category: 'New',
        data: DATA,
        title: `You've seen it before`

    },
    {
        id: '3',
        category: 'Hehe1',
        data: DATA,
        title: 'Super winter sale'
    },
    {
        id: '4',
        category: 'Hehe2',
        data: DATA,
        title: 'Super spring sale'
    },
    {
        id: '5',
        category: 'Hehe3',
        data: DATA,
        title: 'Super autumn sale'
    },
]
const DetailCategoryScreen = ( ) => {
    const navigation = useNavigation();
    const [isSearch, setIsSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    //@ts-ignore
    const renderAllItem = ({ item }) => {
        return (
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        )
    }
    //@ts-ignore
    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItemContainer}>
                <TouchableOpacity
                    onPress={() => {
                        //@ts-ignore
                        navigation.navigate('Item Detail', { item: item })
                    }
                    }>
                    <Image style={styles.imgItem} source={item.uri[0]} />
                </TouchableOpacity>
                <View style={styles.saleView}>
                    <Text fontSize='xs' style={{ color: colors.white }}>{item.sale}</Text>
                </View>
                <TouchableOpacity
                    style={styles.likeBtn}
                >

                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 15, height: 15 }} source={icons.star} />
                    <Image style={{ width: 15, height: 15 }} source={icons.star} />
                    <Image style={{ width: 15, height: 15 }} source={icons.star} />
                    <Image style={{ width: 15, height: 15 }} source={icons.star} />
                    <Image style={{ width: 15, height: 15 }} source={icons.star} />
                    <Text fontSize='xs'>(10)</Text>
                </View>
                <Text fontSize='lg'>{item.title}</Text>
                <Text style={{ color: 'red' }}>{item.price}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backIcon} source={icons.back} />
                </TouchableOpacity>
                {isSearch ?
                    <Text fontSize='2xl' bold >Categories</Text>
                    :
                    <View style={styles.searchView}>
                        <TextInput
                            style={{}}
                            placeholder='Search'
                            onChangeText={setSearchText}
                        />
                    </View>
                }
                <TouchableOpacity onPress={() => { () => { } }}>
                    <SearchIcon size="5" mt="0.5" color="black" style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.filterView}>
                <Text fontSize='3xl' bold>Woman'sTops</Text>
                <View style={styles.filter}>
                    <Image style={styles.backIcon} source={icons.filter} />
                    <Text fontWeight={300}>Filter</Text>
                    <Image style={{ ...styles.backIcon, marginLeft: 60 }} source={icons.updown} />
                    <Text fontWeight={300}>Price: highest to low</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={DATA2}
                    renderItem={renderAllItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // backgroundColor: colors.white,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    searchCoin: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.gray,
        margin: 10
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: Colors.LightGray,
        margin: 10,
        flex: 1,
        height: 40,
        padding: 10,
    },
    filterView: {
        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    },
    filter: {
        flexDirection: 'row',
        backgroundColor: colors.lightGray
    },

    imgHeader: {
        width: '100%',
        height: 200,
    },
    txtCate: {
        marginTop: 130,
        marginLeft: 20,
        color: colors.black,
    },
    listItemContainer: {
        width: 140,
        height: 250,
        marginRight: 10,
    },
    imgItem: {
        width: 140,
        height: 180,
        borderRadius: 10,
    },
    saleView: {
        backgroundColor: colors.red,
        width: 30,
        height: 20,
        position: 'absolute',
        top: 5,
        left: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeBtn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: colors.white,
        bottom: 55,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DetailCategoryScreen;