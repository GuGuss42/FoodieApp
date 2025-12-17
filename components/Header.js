// 📁 components/Header.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuPopup from "./Menu";

export default function Header({ title }) {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleMenuPress = () => setMenuVisible(true);
  const handleClose = () => setMenuVisible(false);

  // 🔹 Load user avatar when header appears
  useEffect(() => {
    const loadAvatar = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAvatar(user.photo || null);
        }
      } catch (e) {
        console.log("Avatar load error:", e);
      }
    };

    // Reload avatar every time screen is focused
    const unsubscribe = navigation.addListener("focus", loadAvatar);
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.navBar}>
        {/* 👤 User Avatar */}
        <View style={styles.userIcon}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={
                avatar
                  ? { uri: avatar } // 🟢 user-selected photo
                  : require("../Sources/usericon.avif") // 🔵 default avatar
              }
              style={styles.userImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* 🏷️ Title */}
        <Text style={styles.title}>{title}</Text>

        {/* ☰ Menu Button */}
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* 🍔 Menu Popup */}
      <MenuPopup visible={menuVisible} onClose={handleClose} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#16a085",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#16a085",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  menuButton: {
    padding: 5,
  },
});
