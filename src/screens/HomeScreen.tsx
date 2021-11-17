import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import SaleBannerModal from '../components/SaleBannerModal';
import { useNavigation } from '@react-navigation/core';
import icons from '../constants/icons';
import images from '../constants/images';
import axios from 'axios';
import { Text } from 'native-base';
import { firebase } from '@react-native-firebase/database';

const database = firebase
  .app()
  .database('https://ecom-ddcd3-default-rtdb.asia-southeast1.firebasedatabase.app/')
  .ref('/users');

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
const heart = '../assets/icons/heart_icon.png'
const redHeart = '../assets/icons/red_heart_icon.png'



const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isLike, setLike] = useState(true);
  const [isHiddenSale, setIsHiddenSale] = useState(true);

  //@ts-ignore
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity
          onPress={() => {
            database.once('value')
              .then(snapshot => {
                console.log('User data: ', snapshot.val());
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
    <Layout style={styles.container}>
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

    </Layout>
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