import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Title: {
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? Fonts.Main : 'Mie Goreng Regular',
        color: Colors().Red,
        marginTop: 50
    },
    Modal: {
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ModalItem: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    cameraStyle: {
        height: 520,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    LoaderConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 50
    }
})