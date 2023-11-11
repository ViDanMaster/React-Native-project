import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderColor: '#000000',
        borderWidth: 1,
        justifyContent: 'center',
    },
    webView: {
        backgroundColor:'transparent',
    },
    textContainer: {
        flex: 0.1,
    },
    feladatszamText: {
        fontSize: 18,
    },
    pontszamText: {
        fontSize: 18,
    },
})

export default styles