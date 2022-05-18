import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
function LandingPage() {
  const [username, getUsername] = useState("");
  useEffect(() => {
    const apiURL = process.env.REACT_APP_API_ADDRESS;
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUserName = async () => {
        const url = `${apiURL}/user`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const promise = await response.json();
        console.log(promise);
        getUsername(promise.split(" ")[0]);
      };
      fetchUserName();
    }
  }, []);
  function logOutHandler() {
    console.log("i ran");
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className="lp-main-container">
      <h1>Hello {username} 👋 </h1>
      <h4>Welcome to College News!</h4>
      <div className="lp-buttons">
        <Link to="/posts">
          <button>View News</button>
        </Link>
        <Link to="/add">
          <button>Add News</button>
        </Link>
      </div>
      {username ? (
        <div>
          <p style={{ marginBottom: "5px", marginTop: "25px" }}>
            Not {username}?
          </p>
          <button id="lp-logout-button" onClick={logOutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <a
          href="/login"
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Login
        </a>
      )}
    </div>
  );
}

export default LandingPage;
