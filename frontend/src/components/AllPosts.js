import { React, useEffect, useState } from "react";
import "./AllPosts.css";
import LoginPage from "./LoginPage";
import PostView from "./PostView";
function AllPosts() {
  const token = localStorage.getItem("token");
  const [username, getUsername] = useState("");
  const [userEmail, getUserEmail] = useState("");

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
        getUsername(promise.userName.split(" ")[0]);
        getUserEmail(promise.userEmail);
      };
      fetchUserName();
    }
  }, []);

  if (!token) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  } else {
    return (
      <div>
        <PostView username={username} userEmail={userEmail} />
      </div>
    );
  }
}

export default AllPosts;
