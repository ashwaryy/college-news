import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function LoginPage() {
  const apiURL = process.env.REACT_APP_API_ADDRESS;
  const navigate = useNavigate();
  const SubmitHandler = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const url = `${apiURL}/register`;
    const data = { name: name, email: email, password: password };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const status = await response.json();
    console.log(status);
    if (status.status) {
      window.alert("Registration Successful, Please login to view/add news");
      navigate("/login");
    } else {
      window.alert("User already exists");
    }
  };

  return (
    <div className="regp-container">
      <h1>Register</h1>

      <div id="regp-form">
        <label for="name" className="regp-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="regp-input"
        />
        <label for="email" id="email-label" className="regp-label">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          required
          className="regp-input"
        />
        <label for="email" className="regp-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="regp-input"
        />
        <button className="regp-button" onClick={SubmitHandler}>
          <input type="submit" value="Register" className="regp-input" />
        </button>

        <div className="regp-links">
          <a href="/login">Login</a>
          <a href="/">Go Back</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
