import { View, Text } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import { Formik } from 'formik'
import { Qr_initial_values } from 'src/Formik/initialValues'
import { PriceSchema } from 'src/Formik/schema'
import Input from 'components/Input'
import Button from 'components/Button'
import { styles } from 'screens/App/Scan Qr /style'

const Modal = () => {
    return (
        <ReactNativeModal isVisible={true} style={styles.Modal}>
            <View style={styles.ModalItem}>
                <Formik
                    initialValues={Qr_initial_values}
                    validationSchema={PriceSchema}
                    onSubmit={values => { }} >{props => (
                        <>
                            <Input {...props} placeholder="ENTER CLIENT PRICE" Label="Total price" />
                            <Button style={styles.button} loading={false} fill title="confirm" onPress={() => props.handleSubmit()} />
                        </>
                    )}</Formik>
            </View>
        </ReactNativeModal>
    )
}

export default Modal