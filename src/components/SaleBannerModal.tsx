import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Text } from '@ui-kitten/components';
import colors from '../constants/colors';
import images from '../constants/images';

type SaleBannerModalProps = {
  setIsHiddenSale: (data: boolean) => void;
  isHiddenSale: boolean;
}

const SaleBannerModal : React.FC<SaleBannerModalProps> = ({setIsHiddenSale, isHiddenSale}) => {
  return (
    // <Modal
    //     animationType="slide"
    //     transparent={true}
    //     visible={isHiddenSale}
    //   >

    <ImageBackground style={styles.imgSale} source={images.couple}>
          <Text category='h1' appearance='hint' style={{...styles.txtCate, marginTop: 400, color: colors.white, lineHeight:48}}>Fashion sale</Text>
          <TouchableOpacity style={styles.checkBtn}
            onPress={()=> setIsHiddenSale(false)}>
            <Text category='s1' style={{color: colors.white}}>Check</Text>
          </TouchableOpacity>
    </ImageBackground>

    // </Modal>
  )
}

const styles = StyleSheet.create({
  txtCate:{
    marginTop: 130,
    marginLeft: 20, 
    color: colors.darkGray,
  },
  imgSale: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: 520,
  },
  checkBtn: {
    backgroundColor: colors.green2,
    marginLeft: 20,
    width: 160,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  }
})

export default SaleBannerModal;