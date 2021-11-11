import { Text } from "@ui-kitten/components";
import React from "react"
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux";
import colors from "../constants/colors";
import icons from "../constants/icons";
import { changeItem } from '../redux/action/cartAction';

interface IBagScreenProps {
  cart: any,
  changeItem: any,
}

const BagScreen = (props: IBagScreenProps) => {
  const { cart, changeItem } = props;
  const { items } = cart;

  const removeItem = (data: any) => {
    let arr: any = [];
    items.forEach((e: any) => {
      if (e.id !== data.id) arr.push(e);
    });
    const updateItem = { ...cart, items: arr };
    changeItem(updateItem);
    console.log('[items :]', items.length)
  }

  //@ts-ignore
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Image source={item.uri[0]} style={{ width: 90, height: 90, borderRadius: 8 }} />
        <View style={{ paddingHorizontal: 15 }}>
          <Text category='label'>{item.title}</Text>
          <View style={{ flexDirection: 'row', padding: 3 }}>
            <Text>Color: </Text>
            <Text>Size: </Text>
          </View>
          <Text style={{ justifyContent: 'flex-end' }}>{item.price}</Text>

          <TouchableOpacity
            style={{ position: 'absolute', top: 1, right: -20, width: 20, height: 20 }}
            onPress={() => { removeItem(item) }}>
            <Image style={{ width: 15, height: 15, resizeMode: 'cover' }} source={icons.heart} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log(cart.items[0].uri)}
      >
        <Text style={{ margin: 15 }} category='h1'>My Bag</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.index}
        // horizontal={true}
        />
      </View>

      <View style={styles.coView}>
        <TouchableOpacity
          style={styles.coBtn}
          onPress={() => { }}>
          <Text style={{ color: colors.white }}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: colors.lightGray,

  },
  itemView: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    margin: 5,
  },
  coView: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '110%',
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
  coBtn: {
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
export default connect(mapStateToProps, { changeItem: changeItem })(BagScreen);