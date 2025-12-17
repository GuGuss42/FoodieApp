// 📁 services/authService.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🔹 Store user info (name + email + photo)
const storeUserInfo = async (user) => {
  try {
    const userToStore = {
      fullName: user.fullName,
      email: user.email,
      photo: user.photo ?? null, // ✅ always present
    };

    await AsyncStorage.setItem("user", JSON.stringify(userToStore));
  } catch (e) {
    console.log("Error storing user info:", e);
  }
};

// 🔹 Retrieve user info
export const getUserInfo = async () => {
  try {
    const userString = await AsyncStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  } catch (e) {
    console.log("Error getting user info:", e);
    return null;
  }
};

// 🔐 LOGIN
export async function login(email, password) {
  try {
    const { data } = await axios.post(
      "http://192.168.1.4:8083/api/auth/login",
      { email, password }
    );

    // ✅ store full user object
    await storeUserInfo({
      fullName: data.data.fullName,
      email: data.data.email,
      photo: null, // 👈 no photo yet
    });

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}

// 📝 REGISTER
export async function register(fullName, email, password, phone, role) {
  const body = { fullName, email, password, phone, role };

  try {
    const { data } = await axios.post(
      "http://192.168.1.4:8083/api/auth/register",
      body
    );

    // ✅ store user immediately
    await storeUserInfo({
      fullName,
      email,
      photo: null, // 👈 ready for later
    });

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
}

export async function modifyPassword(email, oldPassword, newPassword) {
  try {
    const { data } = await axios.put(
      "http://192.168.1.4:8083/api/auth/changepass",
      {
        email,
        oldPassword,
        newPassword,
      }
    );
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Password update failed",
    };
  }
}
export async function logout() {
  try {
    await AsyncStorage.removeItem("user");
    return true;
  } catch (e) {
    console.log("Logout error:", e);
    return false;
  }
}

