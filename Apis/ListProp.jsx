import { API_URL } from "../ProtectedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateProperty = async (
  userData,
  userId,
  token,
  successMessage
) => {
  try {
    const response = await fetch(`${API_URL}/listing/create-list/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
    console.error("Error listing user:", error);
    toast.error(error);
    // toast.error("", error);
    throw error;
  }
};

export const UpdateProperty = async (
  propertyId,
  userData,
  userId,
  token,
  successMessage
) => {
  try {
    const response = await fetch(
      `${API_URL}/listing/update-list/${userId}/${propertyId}`,
      {
        method: "PATCH", // Change the method to "PATCH"
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    toast.success(successMessage);
    return data;
  } catch (error) {
    console.error("Error updating property:", error);
    toast.error(error);
    throw error;
  }
};
