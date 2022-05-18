import React from "react";
import CreatePost from "./CreatePost";
import LoginPage from "./LoginPage";
function AddPost() {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  } else {
    return (
      <div>
        <CreatePost />
      </div>
    );
  }
}

export default AddPost;
