// 📁 components/MenuPopup.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function MenuPopup({ visible, onClose, onNavigate }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>🍴 Menu</Text>

          <TouchableOpacity style={styles.menuItem} onPress={() => onNavigate("Home")}>
            <Text style={styles.menuText}>🏠 Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => onNavigate("Snacks")}>
            <Text style={styles.menuText}>🍟 Snacks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => onNavigate("Italien")}>
            <Text style={styles.menuText}>🍝 Italian</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, { marginTop: 15 }]} onPress={onClose}>
            <Text style={[styles.menuText, { color: '#e74c3c' }]}>❌ Close</Text>
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
  popup: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#16a085',
    marginBottom: 15,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});
