import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend";

export default function AuthFormPage({ setLoginStatus }) {
  // Form data saved in state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // React router hooks
  const { formType } = useParams();
  const navigate = useNavigate();

  // Update state during "change" events in each form input
  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // Execute authentication logic on form submit, redirect to HomePage
  async function handleSubmit(event) {
    // prevent the page from refreshing when the form is submitted
    event.preventDefault();
    // check what the URL param is to determine the auth request to make
    if (formType === "login") {
      const { token } = await logIn(formData);
      localStorage.setItem("userToken", token);
      setLoginStatus(true);
    } else {
      const { token } = await signUp(formData);
      localStorage.setItem("userToken", token);
      setLoginStatus(true);
    }
    // redirect to the home page after signing/logging in
    navigate("/");
  }

  // Conditionally change the value of the form title and submit button
  let actionText;
  formType === "login" ? (actionText = "Log In") : (actionText = "Sign Up");

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">
          {actionText}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-100 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-100 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
              id="password"
              name="password"
              type="password"
              minLength="6"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-gray-100 rounded-md hover:bg-green-800 transition duration-300"
            >
              {actionText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
