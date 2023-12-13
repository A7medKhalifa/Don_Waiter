import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Colors } from 'theme/colors';
import { styles } from './style';
import Modal from 'components/Modal/Modal';

const ReducePointsScreen = () => {
    const loading = false
    const [isVisable, setisVisable] = React.useState(false)
    const [code, setCode] = React.useState('')
    
    const onSuccess = (e: any) => {
        if (e.data) {
            setCode(e.data)
            setisVisable(true)
        }
    };


    return (
        <>
            <Modal code={code} isVisable={isVisable} setisVisable={setisVisable} />
            {!loading ? (
                <QRCodeScanner
                    onRead={onSuccess}
                    flashMode={'auto'}
                    cameraStyle={styles.cameraStyle}
                    topContent={<Text style={styles.Title}>Reduce Points</Text>}
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

export default ReducePointsScreen