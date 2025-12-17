import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MenuPopup from "./Menu";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuPress = () => setMenuVisible(true);
  const handleClose = () => setMenuVisible(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.navBar}>
     <View style={styles.userIcon}>
  <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
    <Image
      source={require("../Sources/user.jpg")}
      style={styles.userImage}
      resizeMode="cover" // optional, ensures image scales nicely
    />
  </TouchableOpacity>
</View>


        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Self-contained Menu */}
      <MenuPopup visible={menuVisible} onClose={handleClose} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#16a085" },
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
  userImage: { width: "100%", height: "100%" },
  title: { fontSize: 20, fontWeight: "bold", color: "#fff", flex: 1, textAlign: "center" },
  menuButton: { padding: 5 },
});
