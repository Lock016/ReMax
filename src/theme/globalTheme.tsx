import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Gotham-Bold',
        color: '#000',
    },
    inputLabel: {
        fontSize: 18,
        fontFamily: 'GothamBook',
        color: '#000',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 30,
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    formContainer: {
        marginVertical: 10,
    },
    inputContainer: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    },
    picker: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    }
});