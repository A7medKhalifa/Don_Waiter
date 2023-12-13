import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import StaticLogo from 'components/Custom Icons/Logo'
import Button from 'components/Button'
import { useNavigation } from '@react-navigation/native'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { LogOut } from 'assets/svgs'
import { useAppDispatch } from 'store/store'
import User from 'store/user'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SelectTypeScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    React.useEffect(() => {
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
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <StaticLogo height={100} width={100} />
                <TouchableOpacity onPress={() => {
                    dispatch(User.logout())
                    AsyncStorage.setItem('USER_TOKEN', '')
                }} activeOpacity={.8} style={styles.Logout}>
                    <LogOut />
                </TouchableOpacity>
            </View>
            <Text style={styles.Title}>select type</Text>

            <TouchableOpacity activeOpacity={.8} onPress={() => {navigate('RedeemReward') }} style={[selectedIndex == 0 ? styles.selctedButton : styles.unSelctedButton, { marginTop: 100 }]}>
                <Text style={selectedIndex == 0 ? styles.selectedButtonTitle : styles.unSelctedButtonTitle}>Redeem Reward</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('ReducePoints') }} style={[selectedIndex == 1 ? styles.selctedButton : styles.unSelctedButton, { marginTop: 40, }]}>
                <Text style={selectedIndex == 1 ? styles.selectedButtonTitle : styles.unSelctedButtonTitle}>Reduce Points</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default SelectTypeScreen