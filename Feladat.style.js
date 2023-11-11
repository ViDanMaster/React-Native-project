import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    kerdesContainer: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20, // +5 for scrollbar outplay
        marginBottom: 5, // -10 for scrollbar outplay
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5, // +10 for scrollbar outplay
        paddingBottom: 5, // -5 for scrollbar outplay
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    kerdesMathJax: {
        backgroundColor:'transparent',
    },
    screen: {
        flex: 1,
        backgroundColor: "#fff9ec",
    },
    navContainer: {
        backgroundColor: "#fff9ec",
        height: 80,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBar: {
        flex: 1,
        width: "80%",
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
    },
    navBtnContainer: {
        flex: 1,
    },
    nextOrPrevBtn:{
        width: 56,
        flex: 1,
        justifyContent: 'center',
    },
    nextOrPrevBtnIcon: {
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.22,
        textShadowRadius: 2.22,
        elevation: 3,
        textAlign: 'center',
    },
    prev: {
        alignItems: 'flex-end',
    },
    ellenorzesBtnContainer: {
        flex: 1.75,
        marginRight: 10,
        marginLeft: 10,
    },
    ellenorzesBtn: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    activeBtn: {
        backgroundColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    inActiveBtn: {
        backgroundColor: "#e2e2e2",
    },
    ellenorzesBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
    activeText: {
        color: COLORS.whiteText,
    },
    inActiveText: {
        color: "#777777",
    },
    feladatSzamText: {
        fontSize: 24,
        fontWeight: '800',
    },
    feladatSzamTextContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        width: 45,
        height: 45,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 5,
        top: 5,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
})

export default styles