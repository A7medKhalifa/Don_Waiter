import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Colors } from 'theme/colors';
import { styles } from './style';
import Modal from 'components/Modal/Modal';
import { useAppDispatch } from 'store/store';
import AppThunks, { doRedeemReward } from 'store/redeem/thunks';

const RedeemRewardScreen = () => {
    const dispatch = useAppDispatch();
    const loading = false
    // const loading = useLoadingSelector(Ticket.thunks.doCheckQRCode);
    const navigation = useNavigation<any>();
    useEffect(() => {
        check(PERMISSIONS.IOS.CAMERA).then(result => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    request(PERMISSIONS.IOS.CAMERA);
                    break;
                case RESULTS.DENIED:
                    request(PERMISSIONS.IOS.CAMERA);
                    break;
                case RESULTS.LIMITED:
                    request(PERMISSIONS.IOS.CAMERA);
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        });
        check(PERMISSIONS.ANDROID.CAMERA).then(result => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    request(PERMISSIONS.ANDROID.CAMERA);
                    break;
                case RESULTS.DENIED:
                    request(PERMISSIONS.ANDROID.CAMERA);
                    break;
                case RESULTS.LIMITED:
                    request(PERMISSIONS.ANDROID.CAMERA);
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        });
    }, []);
    const onSuccess = (e: any) => {
        if (e.data) {
            dispatch(AppThunks.doRedeemReward({ code: 'sa' }))
        }
    };

    return (
        <>
            {/* <Modal /> */}
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
        </>

    )
}

export default RedeemRewardScreen