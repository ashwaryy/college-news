import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
function CreatePost() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

  const navigate = useNavigate();
  const [username, getUsername] = useState("");
  function logOutHandler() {
    localStorage.removeItem("token");
    navigate("/");
  }
  useEffect(() => {
    const apiURL = process.env.REACT_APP_API_ADDRESS;
    const token = localStorage.getItem("token");
    const fetchPosts = async () => {
      const url = `${apiURL}/posts`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const promise = await response.json();
      getUsername(promise.name);
    };
    fetchPosts();
  }, []);
  const apiURL = process.env.REACT_APP_API_ADDRESS;
  const SubmitHandler = async () => {
    const title = document.getElementById("createp-post-title").value;
    const body = document.getElementById("createp-post-body").value;
    const url = `${apiURL}/posts`;
    const data = { title: title, body: body, image: "www.google.com" };
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    });
    const status = await response.json();
    if (status.status === "Post created") {
      navigate("/posts");
    }
  };

  return (
    <div id="createp-body">
      <div id="createp-user-options">
        <h5>Logged in as: {username}</h5>
        <button onClick={logOutHandler}>
          <u>Logout</u>
        </button>
      </div>

      <div id="createp-form">
        <h1>Add News</h1>
        <label for="email" className="createp-label">
          Title:
        </label>
        <input type="text" id="createp-post-title" name="title" required />
        <label for="email" className="createp-label">
          Author:
        </label>
        <input
          type="text"
          id="createp-post-title"
          name="title"
          required
          value={username}
        />
        <label for="body" className="createp-label">
          Body:
        </label>
        <textarea id="createp-post-body" name="body" required />
        <button className="createp-button" onClick={SubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
