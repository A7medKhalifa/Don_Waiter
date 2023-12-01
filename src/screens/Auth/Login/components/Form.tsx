import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { login_initial_values } from 'src/Formik/initialValues';
import { LoginSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { View } from 'react-native';
import { styles } from '../style';
import Button from 'components/Button';
import { useAppDispatch } from 'store/store';
import { useLoadingSelector } from 'store/selectors';
import Geolocation from '@react-native-community/geolocation';
import AuthThunks from 'store/user/thunks';
import { requestLocationPermission } from 'src/HF/Hf';

function Form() {
  const dispatch = useAppDispatch()
  const loading = useLoadingSelector(AuthThunks.doSignIn())
  const [Position, setPostion] = React.useState<any>()
  useEffect(() => {
    requestLocationPermission()
    Geolocation.getCurrentPosition((position) => {
      setPostion(position?.coords)
    })
  }, [])

  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={LoginSchema}
      onSubmit={values => {
        const formData = new FormData()
        formData.append('email', values.email?.toLocaleLowerCase())
        formData.append('password', values.password)
        formData.append('latitude', Position?.latitude)
        formData.append('longitude', Position?.longitude)

        // console.log(formData)
        dispatch(AuthThunks.doSignIn(formData))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <Input  {...props} placeholder="ENTER YOUR E-MAIL ADDRESS" Label="e-mail" />
            <Input {...props} Label="password" placeholder="ENTER YOUR PASSWORD" secureTextEntry />
            <Button style={styles.button} loading={loading} fill title="Login" onPress={() => props.handleSubmit()} />
          </View>
        </>
      )}
    </Formik>
  );
}

export default Form;
