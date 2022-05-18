import { React, useEffect, useState } from "react";
import "./Header.css";
function Header() {
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
  const backArrow = "Go Back";
  return (
    <div>
      <div id="header-user-options">
        <p
          id="header-back-arrow"
          onClick={() => {
            window.history.go(-1);
            return false;
          }}
        >
          {backArrow}
        </p>
        <h5>Logged in as: {username}</h5>
        <button onClick={logOutHandler}>
          <u>Logout</u>
        </button>
      </div>
    </div>
  );
}

export default Header;
