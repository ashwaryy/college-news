import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "./FullPost.css";
function FullPost() {
  const { state } = useLocation();
  const { title, author, body } = state;
  return (
    <div className="pv-allposts-container">
      <Header />
      <div className="fp-body">
        <h3>{title}</h3>
        <h5>Author: {author}</h5>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default FullPost;
