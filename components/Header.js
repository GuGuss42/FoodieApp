import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ title }) {

  const onMenuPress = () => {
    Alert.alert("🍔 Menu", "You pressed the menu button!");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.navBar}>
        
        {/* 🧑 User Image */}
        <View style={styles.userIcon}>
          <Image 
            source={require('../Sources/user.jpg')} 
            style={styles.userImage} 
          />
        </View>

        {/* 🏷️ Title */}
        <Text style={styles.title}>{title}</Text>

        {/* ☰ Menu Button */}
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>

      </View>

      {/* 🍔 Independent Menu Component */}
      <MenuPopup
        visible={menuVisible}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#16a085',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#16a085',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  menuButton: {
    padding: 5,
  },
});
