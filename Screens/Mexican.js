import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { MexicanFood } from "./RecipeDetail";

export default function Mexican() {
  return (
    <View style={styles.container}>
      <Header title="🇲🇽 Mexican Recipes" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MexicanFood />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 10, paddingBottom: 40 },
});
