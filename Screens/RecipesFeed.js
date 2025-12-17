import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Header from "../components/Header";
import { fetchRecipes } from "../services/RecipeService";

export default function RecipesFeed() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadRecipes = async () => {
    try {
      const data = await fetchRecipes();
      setRecipes(data);
    } catch (error) {
      console.log("Error loading recipes:", error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadRecipes();
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.photoUrl ? (
        <Image source={{ uri: item.photoUrl }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={{ color: "#999" }}>No Image</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.author}>
          👤 {item.createdBy}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#16a085" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Recipes Feed" />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#16a085"]}
          />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No recipes yet 🍽️
          </Text>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    padding: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 180,
  },
  imagePlaceholder: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16a085",
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
  },
  author: {
    marginTop: 8,
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#999",
    fontSize: 16,
  },
});
