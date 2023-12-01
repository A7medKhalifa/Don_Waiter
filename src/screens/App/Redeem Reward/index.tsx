import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import AppThunks from 'store/redeem/thunks';
import { View, Text, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useLoadingSelector } from 'store/selectors';
import { Colors } from 'theme/colors';
import { styles } from './style';
import { useAppDispatch } from 'store/store';

const RedeemRewardScreen = () => {
    const dispatch = useAppDispatch();
    const loading = useLoadingSelector(AppThunks.doRedeemReward());
    const navigation = useNavigation<any>();

    const onSuccess = (e: any) => {
        if (e.data) {
            dispatch(AppThunks.doRedeemReward({ code: e.data })).then((res: any) => {
                navigation.replace('SelectType')
            })
        }
    };

    return (
        <View style={styles.container}>
            {!loading ? (
                <QRCodeScanner
                    onRead={onSuccess}
                    flashMode={'auto'}
                    cameraStyle={styles.cameraStyle}
                    topContent={<Text style={styles.Title}>redeem reward</Text>}
                />
            ) : (
                <View
                    style={styles.LoaderConatiner}>
                    <ActivityIndicator size={25} color={Colors().Red} />
                </View>
            )}
        </View>

    )
}

export default RedeemRewardScreen