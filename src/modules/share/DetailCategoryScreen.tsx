import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon, SearchIcon, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { DATA, DATA2, DATAg, DATAt, product } from "../constants/constant";
import { Spinner } from 'native-base';
import EmptyComponent from "../../components/EmptyComponent";

const DetailCategoryScreen = () => {
    const [numCols, setColumnNo] = useState(2);
    const [data, setData] = useState(DATAg);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const [isSearch, setIsSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isHighLow, setIsHighLow] = useState(true);
    const route = useRoute();
    const { title } = route.params;
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    useEffect(() => {
        console.log(searchText)
        let newArr: product[] = [];
        for (let i = 0; i < DATA.length; i++) {
            if (DATA[i].title.toLowerCase().includes(searchText.toLowerCase()))
                newArr.push(DATA[i]);
        }
        setData([...newArr])
        console.log(data)
    }, [searchText])

    useEffect(() => {
        if(isHighLow)
        setData([...DATAt])
        else setData([...DATAg])
    }, [isHighLow])

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
                    {item && item.uri && <Image style={styles.imgItem} source={[item.uri]} />}
                </TouchableOpacity>
                <View style={styles.saleView}>
                    <Text fontSize='xs' style={{ color: colors.white }}>{item.sale}</Text>
                </View>
                <TouchableOpacity
                    style={styles.likeBtn}
                >
                    {item.isLike ?
                        <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.red_heart} />
                        :
                        <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.heart} />
                    }
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
                    <Text style={{ color: 'red' }}>{item.price}$</Text>
                </View>
            </View>
        )
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                        <ChevronLeftIcon size="5" mt="0.5" color="black" style={styles.backIcon} />
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
                    {/* <SearchIcon size="5" mt="0.5" color="black" style={styles.backIcon} /> */}
                </TouchableOpacity>
            </View>
            <View style={styles.filterView}>
                <Text style={{ fontWeight: '800', fontSize: 22, margin: 10 }}>{title}</Text>
                <TouchableOpacity style={styles.filter}
                    onPress={() => {
                        setIsHighLow(!isHighLow);
                    }}
                >
                    <Image style={{ marginLeft: 10, width: 25, height: 25, alignSelf: 'center' }} source={icons.updown} />
                    <Text style={{ fontWeight: '400', alignSelf: 'center', margin: 8 }}>Price: highest to low</Text>
                </TouchableOpacity>
            </View>
            <View>
                {isLoading ? (
                    <View style={{ marginTop: 200 }}>
                        <Spinner accessibilityLabel="Loading posts" size={'lg'} color={'black'} />
                    </View>
                ) : (data.length > 0 ?
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        // key={numCols}
                        numColumns={numCols}
                        ListEmptyComponent={
                            <EmptyComponent />
                        }
                    /> : <EmptyComponent />
                )
                }
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white,
        marginBottom: 10
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
        borderRadius: 12,
        borderWidth: 0.2,
        borderColor: colors.mildGray,
        margin: 10,
        flex: 1,
        height: 40,
        padding: 8,
    },
    filterView: {
        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    },
    filter: {
        flexDirection: 'row',
        backgroundColor: colors.lighterGray
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
        width: 198,
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