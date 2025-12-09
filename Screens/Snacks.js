import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";

export default function Snacks() {
  const snacks = [
    {
      name: "Biscuits",
      recipe: "Lovely sweet Tunisian-made treats.",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpFG6C4uWBEwzf1KUshSTRivMpoevaNKT5A&s",
    },
    {
      name: "Cookies",
      recipe: "Sweet baked biscuits with chocolate chips or nuts.",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxETEVKHUfWoLK5qbBOIrM8BQacwftd5cfMw&s",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      {/* ✅ Header at the top */}
      <Header title="Snacks" />

      {/* ✅ Scrollable list below */}
      <ScrollView contentContainerStyle={styles.container}>
        {snacks.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={item.local ? item.local : { uri: item.uri }}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.recipe}>{item.recipe}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  card: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a085",
  },
  recipe: {
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },
});
