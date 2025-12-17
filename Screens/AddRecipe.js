import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { addRecipe } from "../services/RecipeService";

const AddRecipe = ({ navigation }) => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name || !description) {
      Alert.alert("Error", "Name and description are required");
      return;
    }

    try {
      await addRecipe({
        name,
        description,
        photoUrl,
      });

      Alert.alert("Success", "Recipe added successfully 🍽️");
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Error",
        error.message || "Failed to add recipe"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Recipe 🍽️</Text>

      <TextInput
        style={styles.input}
        placeholder="Recipe name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Photo URL (optional)"
        value={photoUrl}
        onChangeText={setPhotoUrl}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Upload Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00897B",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#00897B",
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
