import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { FrenchFood } from "./RecipeDetail";

export default function French() {
  return (
    <View style={styles.container}>
      <Header title="🇫🇷 French Recipes" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FrenchFood />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 10, paddingBottom: 40 },
});
