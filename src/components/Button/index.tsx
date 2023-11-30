import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'theme/colors';
import { styles } from './style';
import LottieView from 'lottie-react-native';
import { ButtonLoading } from 'assets/lotties';

function Button({
  fill,
  title,
  onPress,
  style,
  Icon,
  loading,
  disabled
}: {
  fill?: boolean;
  title: string;
  onPress: any
  style?: any;
  Icon?: any
  loading?: boolean;
  disabled?: any
}) {
  return (
    <>
      <TouchableOpacity disabled={loading || disabled} onPress={onPress}
        style={[
          styles.Container,
          {
            backgroundColor: fill ? Colors().Red : Colors().white,
            borderColor: fill ? Colors().Red : Colors().black,
          },
          style
        ]}>
        {loading ?
          <LottieView
            autoPlay
            loop
            source={ButtonLoading}
            style={styles.Loader}
          />
          :
          <Text
            style={[
              styles.Title,
              { color: fill ? Colors().white : Colors().black, },
            ]}>
            {title}
          </Text>}
        {Icon}
      </TouchableOpacity>
    </>
  );
}

export default Button;
