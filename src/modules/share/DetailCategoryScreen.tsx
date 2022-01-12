import { useNavigation } from "@react-navigation/native";
import { SearchIcon, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { DATA, DATA2 } from "../constants/constant";
import {Spinner} from 'native-base';

const DetailCategoryScreen = () => {
    const [numCols, setColumnNo] = useState(2);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const [isSearch, setIsSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        setSearchText
    })
    
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
                <View style={{ flex: 1, padding: 5 }}>
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
                {isLoading ? (
                    <View style={{marginTop: 200}}>
                        <Spinner accessibilityLabel="Loading posts" size={'lg'} color={'black'} />
                    </View>
                ) :
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        // key={numCols}
                        numColumns={numCols}
                    />
                }
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white,
        marginBottom: 150
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
        width: 200,
        height: 290,
        marginRight: 10,
        borderWidth: 0.6,
        borderColor: colors.mildGray,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center'
    },
    imgItem: {
        width: 200,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
        width: 35,
        height: 35,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: colors.white,
        bottom: 75,
        right: -1,
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