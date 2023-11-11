import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import styles from './Magyarazat.style';

interface MagyarazatProps {
    closeModal: () => void,
    magyarazat: string,
}

const Magyarazat: React.FC<MagyarazatProps> = ({closeModal, magyarazat}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>{magyarazat}</Text>
          <Pressable style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Bezárás</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Magyarazat