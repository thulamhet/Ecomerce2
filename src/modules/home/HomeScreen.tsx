import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import SaleBannerModal from '../../components/SaleBannerModal';
import icons from '../../constants/icons';
import images from '../../constants/images';
import { Text } from 'native-base';
// const reference = database().ref('/users');
import { firebase } from '@react-native-firebase/database';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA, DATA2 } from '../constants/constant';

const reference = firebase
  .app()
  .database('https://ecom-ddcd3-default-rtdb.asia-southeast1.firebasedatabase.app/')
  .ref('/products')
  .once('value')

var options = {
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
    },
    headers: {
        'x-rapidapi-host': 'asos2.p.rapidapi.com',
        'x-rapidapi-key': '88f3015f4amsh7db4362200ee21ap104472jsn2f97ea7a1a9a'
    }
};


const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [isLike, setLike] = useState(true);
    const [isHiddenSale, setIsHiddenSale] = useState(true);

    //@ts-ignore
    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItemContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Item Detail', { item: item })
                        reference.then(snapshot => {
                            console.log('Products: ', snapshot.val());
                          });
                    }
                    }>
                    <Image style={styles.imgItem} source={item.uri[0]} />
                </TouchableOpacity>
                <View style={styles.saleView}>
                    <Text fontSize='xs' style={{ color: colors.white }}>{item.sale}</Text>
                </View>
                <TouchableOpacity
                    style={styles.likeBtn}
                    onPress={() => setLike(!isLike)}>
                    {isLike ?
                        <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.heart} />
                        :
                        <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.red_heart} />
                    }
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

    //@ts-ignore
    const renderAllItem = ({ item }) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', }}>
                    <Text fontSize='3xl' bold>{item.category}</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 290, marginTop: 15 }}>View all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginBottom: 10 }}>{item.title}</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        )
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Street Clothes")}>
                <ImageBackground style={styles.imgHeader} source={images.model_woman}>
                    <Text fontSize='3xl' bold style={styles.txtCate}>Street clothes</Text>
                </ImageBackground>
            </TouchableOpacity>

            <View style={{ marginVertical: 20, marginHorizontal: 10, flex: 1 }}>

                <FlatList
                    data={DATA2}
                    renderItem={renderAllItem}
                    keyExtractor={item => item.id}
                />

            </View>
            {/* {isHiddenSale &&
        <SaleBannerModal setIsHiddenSale={setIsHiddenSale} isHiddenSale={isHiddenSale} />
      } */}

        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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

export default HomeScreen;