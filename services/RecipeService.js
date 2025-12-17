import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.4:8083/api/recipes";

/**
 * 🔹 Get all recipes
 */
export async function fetchRecipes() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Fetch recipes error:", error);
    throw error;
  }
}

/**
 * 🔹 Add a new recipe
 */
export async function addRecipe({ name, description, photoUrl }) {
  try {
    // ✅ Get logged-in user from AsyncStorage
    const userString = await AsyncStorage.getItem("user");
    console.log("Stored user string:", userString);

    if (!userString) {
      throw new Error("User not logged in");
    }

    const user = JSON.parse(userString);
    console.log("Parsed user:", user);

    const payload = {
      name,
      description,
      photoUrl,
      createdBy: user.email,
    };

    console.log("Sending recipe payload:", payload);

    const response = await axios.post(`${API_URL}/add`, payload);

    console.log("Recipe added response:", response.data);
    return response.data;

  } catch (error) {
    console.log(
      "Add recipe error:",
      error.response?.data || error.message
    );
    throw error;
  }
}
