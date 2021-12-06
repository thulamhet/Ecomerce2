import { Text } from "@ui-kitten/components";
import { Button } from "native-base";
// import { Popover } from "native-base";
import React from "react"
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux";
import Annouce from "../components/PopAnnounce";
import colors from "../constants/colors";
import { changeItem } from '../redux/action/cartAction';

interface IFavouriteScreenProps {
    cart: any,
    changeItem: any,
}

const FavouriteScreen = (props: IFavouriteScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>Favourite</Text>
            <Annouce  trigger ={(triggerProps) => {
            return (
              <Button colorScheme="danger" alignSelf="center" {...triggerProps}>
                Delete Customer
              </Button>
            )
          }}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        alignContent: 'center'

    },
})

const mapStateToProps = (state: any) => {
    const { cartReducer } = state;
    return { cart: cartReducer };
};
export default connect(mapStateToProps, { changeItem: changeItem })(FavouriteScreen);