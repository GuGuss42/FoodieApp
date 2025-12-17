// 📁 services/authService.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Store user info (name + email)
const storeUserInfo = async (user) => {
  try {
    // user is an object like { fullName, email }
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    console.log("Error storing user info:", e);
  }
};

// Retrieve user info
export const getUserInfo = async () => {
  try {
    const userString = await AsyncStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  } catch (e) {
    console.log("Error getting user info:", e);
    return null;
  }
};

export async function login(email, password) {
  try {
    const { data } = await axios.post(
      "http://192.168.1.4:8083/api/auth/login",
      { email, password }
    );

    // Store name + email together
    await storeUserInfo({
      fullName: data.data.fullName,
      email: data.data.email,
    });

    return data; // Spring sends ResponseDTO
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}

export async function register(fullName, email, password, phone, role) {
  const body = { fullName, email, password, phone, role };

  try {
    const { data } = await axios.post(
      "http://192.168.1.4:8083/api/auth/register",
      body
    );

    // Store name + email together
    await storeUserInfo({
      fullName: fullName,
      email: email,
    });

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
}
