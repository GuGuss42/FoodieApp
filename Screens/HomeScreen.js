import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

const Icons = [
  {
    uri: "https://th.bing.com/th/id/R.521574239a33cd88906847edc0aedfe0?rik=65GGgsy7rLtYOg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1841297.jpg&ehk=NVXgea9Mvc5uzupW5na8bS0OK96LWo5FDW3DzI8T6m0%3d&risl=&pid=ImgRaw&r=0",
    name: "Italian",
  },
  {
    uri: "https://tse1.mm.bing.net/th/id/OIP.v2orr8q9om2Zkt92O-H6awHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "French",
  },
  {
    uri: "https://th.bing.com/th/id/R.7ca0e4a7fc3b2d298f7b5af108334e3a?rik=bGuP%2bXs274dmMA&pid=ImgRaw&r=0",
    name: "Tunisian",
  },
  {
    uri: "https://th.bing.com/th/id/R.3e8182995ae81f5dc1e001a7711cf958?rik=xUFIw99pBwooIA&pid=ImgRaw&r=0",
    name: "Mexican",
  },
];

export default function HomeScreen({ navigation }) {
 const handlePress = (country) => {
  if (country === "Italian") {
    navigation.navigate("Italien");
  } else if (country === "French") {
    navigation.navigate("French");
  } else if (country === "Tunisian") {
    navigation.navigate("Tunisian");
  } else if (country === "Mexican") {
    navigation.navigate("Mexican");
  }
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header title="🍳 Food Recipes" />

        {/* Image Slider */}
        <ImageSlider />

        {/* Cuisine Selection */}
        <Text style={styles.categoryTitle}>🌍 Choose a Cuisine</Text>

        <View style={styles.gridContainer}>
          {Icons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.flagBlock}
              onPress={() => handlePress(icon.name)}
            >
              <Image source={{ uri: icon.uri }} style={styles.flagImage} />
              <Text style={styles.flagLabel}>{icon.name}</Text>
            </TouchableOpacity>
          ))}
       <TouchableOpacity onPress={() => navigation.navigate("Snacks")}>
  <Text style={{ color: "#16a085", textAlign: "center" }}>See Snacks 🍿</Text>
   </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0e0000ff",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 60,
    backgroundColor: "#f5f5f5",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontStyle: "italic",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 1,
    borderColor: "#16a085",
    borderWidth: 1,
    borderBottomWidth: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  flagBlock: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 70,
    padding: 10,
    width: 140,
    height: 140,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  flagImage: {
    marginTop: 20,
    width: 80,
    height: 50,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#459a1aff",
  },
  flagLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#16a085",
  },
});
