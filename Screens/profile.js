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
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../components/Header";
import MenuPopup from "../components/Menu";
import { modifyPassword } from "../services/authService";

// 🧑 Simple predefined avatars
const AVATARS = [
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
  "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
];

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    photo: null,
  });

  const [menuVisible, setMenuVisible] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // 🔹 Load user from AsyncStorage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.log("Error loading user info:", e);
      }
    };
    loadUser();
  }, []);

  // 🔹 Avatar selection
  const handleAvatarSelect = async (avatar) => {
    const updatedUser = { ...user, photo: avatar };
    setUser(updatedUser);
    await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
    setShowAvatars(false);
  };

  // 🔹 Change password
  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const result = await modifyPassword(
      user.email,
      oldPassword,
      newPassword
    );

    if (result.success) {
      Alert.alert("Success", "Password updated successfully");
      setOldPassword("");
      setNewPassword("");
    } else {
      Alert.alert("Error", result.message);
    }
  };

  // 🔹 Logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Profile" />

      <MenuPopup
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={(screen) => navigation.navigate(screen)}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileCard}>
          <View style={styles.profileHeader} />

          {/* Avatar */}
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={() => setShowAvatars(!showAvatars)}
          >
            {user.photo ? (
              <Image source={{ uri: user.photo }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>Choose Avatar</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Avatar picker */}
          {showAvatars && (
            <View style={styles.avatarList}>
              {AVATARS.map((a, i) => (
                <TouchableOpacity key={i} onPress={() => handleAvatarSelect(a)}>
                  <Image source={{ uri: a }} style={styles.smallAvatar} />
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.email}>{user.email}</Text>

          {/* Password form */}
          <View style={styles.form}>
            <Text style={styles.labels}>Old Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={oldPassword}
              onChangeText={setOldPassword}
            />

            <Text style={styles.labels}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btn} onPress={handleChangePassword}>
        <Text style={styles.btnText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.logoutBtn]}
        onPress={handleLogout}
      >
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
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

  avatarList: {
    flexDirection: "row",
    marginVertical: 10,
  },

  smallAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 6,
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
    backgroundColor: "#00897B",
    padding: 16,
    borderRadius: 10,
    margin: 16,
  },

  logoutBtn: {
    backgroundColor: "#e74c3c",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
