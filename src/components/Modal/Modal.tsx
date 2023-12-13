import { View, Text } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import { Formik } from 'formik'
import { Qr_initial_values } from 'src/Formik/initialValues'
import { PriceSchema } from 'src/Formik/schema'
import Input from 'components/Input'
import Button from 'components/Button'
import { styles } from 'screens/App/Redeem Reward/style'
import { useAppDispatch } from 'store/store'
import AppThunks from 'store/redeem/thunks'
import { useNavigation } from '@react-navigation/native'

const Modal = ({ code, isVisable, setisVisable }: { code: any, isVisable: boolean, setisVisable: any }) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();
    const [load, setLoad] = React.useState(false)
    return (
        <ReactNativeModal isVisible={isVisable} style={styles.Modal}>
            <View style={styles.ModalItem}>
                <Formik
                    initialValues={Qr_initial_values}
                    validationSchema={PriceSchema}
                    onSubmit={values => {
                        setLoad(true)
                        const formData = new FormData
                        formData.append('code', code)
                        formData.append('total_price', values.Totalprice)
                        dispatch(AppThunks.doReducePoints(formData)).then(() => {
                            setisVisable(false)
                            setLoad(false)
                            setTimeout(() => {
                                navigation.replace('SelectType')
                            }, 2000);
                        })
                    }} >{props => (
                        <>
                            <Input {...props} placeholder="ENTER CLIENT PRICE" Label="Total price" />
                            <Button
                                fill
                                title="confirm"
                                loading={load}
                                style={styles.button}
                                onPress={() => props.handleSubmit()} />
                        </>
                    )}</Formik>
            </View>
        </ReactNativeModal>
    )
}

export default Modal