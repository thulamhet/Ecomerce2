import React from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addItem } from '../redux/action/cartAction';

interface IBagScreenProps {
  cart: any,
}

const BagScreen = (props: IBagScreenProps) => {
  const {cart} = props;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        onPress = {()=> console.log(cart)}
      >
        <Text>asdasd</Text>
      </TouchableOpacity>
     
    </View>
  )
}
const mapStateToProps = (state: any) => {
  const { cartReducer } = state;
  return { cart: cartReducer };
};
export default connect(mapStateToProps, { addItem: addItem })(BagScreen);