import axios from "axios";

export async function login(email, password) {
  try {
    const { data } = await axios.post(
      "http://192.168.1.7:8081/api/auth/login",
      { email, password }
    );

    return data; // Spring sends ResponseDTO
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}
