import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        marginTop: 20,
    },
    valaszButton: {

        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    valaszMathJax: {
        backgroundColor:'transparent',
        fontSize: 60,
    },
    selected: {
        borderColor: COLORS.accentBlue,
        backgroundColor: "#f0f7fa"
    },
    unSelected: {
        borderColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
    },
    selectedHelyes: {
        borderColor: "green",
        backgroundColor: "#ccfcd6",
    },
    selectedRossz: {
        borderColor: "red",
        backgroundColor: "#ffcfcf",
    }
})

export default styles