import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff9ec",
    },
    pontszamHeader: {
        height: 80,
        flexDirection: 'row',
        marginTop: 20,
    },
    pontszamContainer: {
        flex: 1,
        alignItems: 'center',
    },
    szazalekContainer: {
        flex: 1,
        alignItems: 'center',
    },
    erdemjegyContainer: {
        flex: 1,
        alignItems: 'center',
    },
    pontszamHeaderText: {
        fontSize: 16,
    },
    pontszamText: {
        fontSize: 24,
    },
    pontszam: {
        color: COLORS.primary,
    },
    szazalek: {
        color: COLORS.accentBlue,
    },
    
})

export default styles