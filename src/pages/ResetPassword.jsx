import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../ProtectedRoute";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const result = await registerUser(formData);
  //     toast.success(result.message);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <div className="log-box w-[450px] border border-gray-500 relative mx-auto my-[5rem] p-6 grow flex flex-col items-center">
      <h2 className="text-4xl text-center">Reset Password</h2>
      <form className="flex flex-col w-full">
        <label htmlFor="password" className="flex flex-col">
          <input
            type="password"
            name="newPassword"
            placeholder="New password"
            className=" outline-none"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="confirmPassword" className="flex flex-col">
          <input
            type="password"
            name="confirmPassword" // Corrected the name here
            placeholder="Confirm password"
            className="outline-none"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md mb-5"
        >
          Reset
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ResetPassword;
