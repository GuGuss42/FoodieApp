// 📁 Screens/ProfileScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import MenuPopup from "../components/Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({ fullName: "", email: "", photo: null });
  const [menuVisible, setMenuVisible] = useState(false);

  // Load user info from AsyncStorage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser({ ...JSON.parse(storedUser), photo: null }); // photo will be null initially
        }
      } catch (e) {
        console.log("Error loading user info:", e);
      }
    };
    loadUser();
  }, []);

  const handleNavigate = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header title="Profile" />

      {/* Menu Popup */}
      <MenuPopup
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />

<ScrollView contentContainerStyle={styles.container}>

  <View style={styles.profileCard}>

    {/* Green header */}
    <View style={styles.profileHeader} />

    {/* Avatar */}
    <TouchableOpacity style={styles.avatarWrapper}>
      {user.photo ? (
        <Image source={{ uri: user.photo }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>Add Photo</Text>
        </View>
      )}
    </TouchableOpacity>

    {/* Name + Email */}
    <Text style={styles.name}>{user.fullName}</Text>
    <Text style={styles.email}>{user.email}</Text>

    {/* Inputs */}
    <View style={styles.form}>
      <Text style={styles.labels}>Full Name</Text>
      <TextInput style={styles.input} />

      <Text style={styles.labels}>Email</Text>
      <TextInput style={styles.input} />
    </View>

  </View> 

</ScrollView>
<View>
<TouchableOpacity style={styles.btn}>
  <Text>Submit</Text>
</TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    flexGrow: 1,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingBottom: 24,
    alignItems: "center",
    elevation: 5,
  },

  profileHeader: {
    height: 120,
    width: "100%",
    backgroundColor: "#00897B",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  avatarWrapper: {
    marginTop: -60,
    marginBottom: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },

  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e0f2f1",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
  },

  avatarText: {
    color: "#00897B",
    fontWeight: "700",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 8,
  },

  email: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 20,
  },

  form: {
    width: "100%",
    paddingHorizontal: 20,
  },

  labels: {
    color: "#00897B",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  btn: {
    backgroundColor: "#f5f5f5",
    
  }
});

