import { View, Text, ImageBackground, Image, Platform } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import { styles } from '../style'
import { Free } from 'assets/Images'
import Button from 'components/Button'
import { useNavigation } from '@react-navigation/native'
import Fonts from 'theme/fonsFamily'
import { Colors } from 'theme/colors'

const Modal = ({
  data,
  isVisable,
  setIsVisable
}: {
  data: any;
  isVisable?: boolean;
  setIsVisable?: any
}) => {
  const navigation = useNavigation<any>();
  return (
    <ReactNativeModal
      onBackButtonPress={() => {
        setIsVisable(false);
        navigation.replace('SelectType')
      }}
      onBackdropPress={() => {
        setIsVisable(false);
        navigation.replace('SelectType')
      }}
      isVisible={isVisable}>
      <View style={styles.ModalContainer}>
        <Text style={styles.clamedSuccess}>Claimed Success</Text>
        <ImageBackground style={styles.Free} resizeMode='contain' source={Free}>
          <Image style={styles.Image} source={{ uri: `https://don-eatery.o-projects.org/${data?.item?.image}` }} />
        </ImageBackground>
        <Text style={styles.ModalTitle}>{data?.item?.name}</Text>
        {/* <Text style={styles.ModalDes}>{data?.item?.description}</Text> */}
        <Button onPress={() => {
          setIsVisable(false);
          navigation.replace('SelectType')
        }} style={styles.ModalButton} fill title='confirm' />
      </View>
    </ReactNativeModal>
  )
}

export default Modal