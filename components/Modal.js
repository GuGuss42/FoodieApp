// 📁 components/Details.js
import React from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Details({ visible, onClose, children }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          {children}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>❌ Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 15,
  },
  closeText: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
