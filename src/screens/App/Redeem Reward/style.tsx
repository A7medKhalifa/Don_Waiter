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
    },
    ModalContainer: {
        paddingVertical: 25,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    clamedSuccess: {
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: Colors().Red,
        marginBottom: 10,
        fontFamily: Platform.OS == 'ios' ? Fonts.Main : 'Mie Goreng Regular',
    },
    Free: {
        height: 120,
        width: '100%',
        alignItems: 'center'
    },
    Image: {
        height: 120,
        width: 130,
        resizeMode: 'contain'
    },
    ModalTitle: {
        fontSize: 24,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: '#000',
        fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
        marginTop: 30,
        textAlign: 'center'
    },
    ModalDes: {
        fontSize: 16,
        fontWeight: '400',
        textTransform: 'uppercase',
        color: '#000',
        fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-light-58a8a4b38001d',
        marginTop: 15
    },
    ModalButton: {
        marginTop: 20
    }
})