// api.js

import { API_URL } from "../ProtectedRoute";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = async (userData, successMessage, errorMessage) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const loginUser = async (userData, successMessage, errorMessage) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json(); // Assuming the server sends error details in JSON format
      throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error logins user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};
