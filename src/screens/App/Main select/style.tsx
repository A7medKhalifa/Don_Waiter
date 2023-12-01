import { Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    Logout: {
        position: 'absolute',
        right: 10
    },
    Title: {
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? Fonts.Main : 'Mie Goreng Regular',
        color: Colors().Red,
        marginTop: 20,
    },
    unSelctedButtonTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
        color: Colors().black
    },
    selectedButtonTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
        color: Colors().white,
    },
    selctedButton: {
        padding: 20,
        width: '100%',
        borderColor: Colors().Red,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors().Red
    },
    unSelctedButton: {
        padding: 20,
        width: '100%',
        borderColor: Colors().Red,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 40
    }
})