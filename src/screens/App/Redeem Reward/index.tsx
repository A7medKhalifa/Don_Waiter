import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import AppThunks from 'store/redeem/thunks';
import { View, Text, ActivityIndicator, Alert, } from 'react-native'
import { useLoadingSelector } from 'store/selectors';
import { Colors } from 'theme/colors';
import { styles } from './style';
import { useAppDispatch } from 'store/store';
import Modal from './components/Modal';
import { useNavigation } from '@react-navigation/native';

const RedeemRewardScreen = () => {
    const dispatch = useAppDispatch();
    const loading = useLoadingSelector(AppThunks.doRedeemReward());
    const [data, setData] = React.useState<any>({})
    const [isVisable, setIsVisable] = React.useState<any>(false)
    const navigation = useNavigation<any>();

    const onSuccess = (e: any) => {
        if (e.data) {
            dispatch(AppThunks.doRedeemReward({ code: e.data })).then((res: any) => {
                if (res?.payload?.data?.status == 0) {
                    navigation.replace('SelectType')
                } else {
                    console.log(res?.payload?.data)
                    setData(res?.payload?.data)
                    setIsVisable(true)
                }

            })
        }
    };

    return (
        <View style={styles.container}>
            <Modal data={data} isVisable={isVisable} setIsVisable={setIsVisable} />
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