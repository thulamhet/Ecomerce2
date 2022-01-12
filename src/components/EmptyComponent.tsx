import React from "react"
import { Image, Text, View } from "react-native"
import colors from "../constants/colors"
import images from "../constants/images"

const EmptyComponent = () => {
    return (
        <View
            style={{
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14, color: colors.darkGray, marginVertical: 20 }}>Không có dữ liệu</Text>
            <Image source={images.empty} />
        </View>
    )
}

export default EmptyComponent