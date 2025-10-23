import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { TunisianFood } from "./RecipeDetail";

export default function Tunisian() {
  return (
    <View style={styles.container}>
      <Header title="🇹🇳 Tunisian Recipes" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TunisianFood />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 10, paddingBottom: 40 },
});
