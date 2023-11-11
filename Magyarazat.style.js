import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    closeButton: {
      backgroundColor: '#eee',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
    },
    closeButtonText: {
      fontSize: 16,
      color: '#333',
    },
  });

export default styles