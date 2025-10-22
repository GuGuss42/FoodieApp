import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { ItaFood } from "./RecipeDetail";

export default function Italien() {
  return (
    <View style={styles.container}>
      <Header title="🇮🇹 Italian Recipes" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ItaFood />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 40,
  },
});
