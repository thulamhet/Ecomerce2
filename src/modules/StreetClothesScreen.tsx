import React, { useState } from 'react';
import { Layout } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import images from '../constants/images';
import { Text } from 'native-base';

const StreetClothesScreen = () => {
    return (
        <Layout style={styles.container}>
            <TouchableOpacity>
                <ImageBackground style={styles.imgNew} source={images.street_style}>
                    <Text fontSize='4xl' bold style={{ marginTop: 300, marginLeft: 120, color: colors.white }}>New collection</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.saleView}>
                    <Text fontSize='4xl' bold style={{ color: colors.green2, marginLeft: 20 }}>Summer</Text>
                    <Text fontSize='4xl' bold style={{ color: colors.green2, marginLeft: 20 }}>sale</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <ImageBackground style={styles.imgBlack} source={images.black_people}>
                    <Text fontSize='4xl' bold style={{ marginTop: 150, marginLeft: 10, color: colors.white }}>Black</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
                <ImageBackground style={styles.imgWoman} source={images.men_hoddies}>
                    <Text fontSize='4xl' bold style={{ marginTop: 140, marginLeft: 30 }}>Men's</Text>
                    <Text fontSize='4xl' bold style={{ marginLeft: 30 }}>hoodies</Text>
                </ImageBackground>
            </TouchableOpacity>
        </Layout>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgNew: {
        position: 'absolute',
        width: '100%',
        height: 366,
        left: 0,
        top: 0,
    },
    imgBlack: {
        position: 'absolute',
        width: 185,
        height: 304,
        left: 0,
        top: 537,
    },
    imgWoman: {
        position: 'absolute',
        width: 290,
        height: 475,
        left: 185,
        top: 366,
    },
    saleView: {
        position: 'absolute',
        width: 187,
        height: 186,
        left: 0,
        top: 366,
        backgroundColor: colors.white,
        justifyContent: 'center',
    }

})

export default StreetClothesScreen;