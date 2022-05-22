import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiURL = process.env.REACT_APP_API_ADDRESS;
  const [authToken, setAuthToken] = useState("");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const SubmitHandler = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const url = `${apiURL}/login`;
    const data = { email: email, password: password };
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    });
    const status = await response.json();
    if (status.status) {
      setAuthToken(status.token);
      localStorage.removeItem("token");
      localStorage.setItem("token", status.token);
      myHeaders.append("Authorization", `Bearer ${authToken}`);
      console.log("ran till here");
      navigate("/");
    } else if (status.message === "password mismatch") {
      const errorText = document.getElementsByClassName("lp-wrong-password")[0];
      errorText.style.display = "block";
    } else if (status.message === "User Not Found") {
      const errorTextem = document.getElementsByClassName("lp-wrong-email")[0];
      errorTextem.style.display = "block";
    }
  };
  if (!token) {
    return (
      <div className="logp-container">
        <h1>Login</h1>

        <div id="logp-form">
          <label for="email" className="logp-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="logp-input"
            onClick={() => {
              const errorTextem =
                document.getElementsByClassName("lp-wrong-email")[0];
              errorTextem.style.display = "none";
            }}
          />
          <p className="lp-wrong-email">User Not Found</p>

          <label for="password" className="logp-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="logp-input"
            onClick={() => {
              const errorText =
                document.getElementsByClassName("lp-wrong-password")[0];
              errorText.style.display = "none";
            }}
          />
          <p className="lp-wrong-password">Wrong Password</p>

          <button className="logp-button" onClick={SubmitHandler}>
            <input type="submit" value="Submit" className="logp-input" />
          </button>

          <div className="logp-links">
            <a href="/register">Register</a>
            <a href="/forgot">Forgot Password?</a>
            <a href="/">Go Back</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="logp-container">
      <p>Already Logged In</p>
      <button
        className="logp-button"
        style={{ width: "150px", height: "50px", marginTop: "0px" }}
      >
        <a href="/" style={{ textDecoration: "none", marginBottom: "0px" }}>
          Go Back
        </a>
      </button>
    </div>
  );
}

export default LoginPage;
