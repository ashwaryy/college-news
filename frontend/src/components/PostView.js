import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./PostView.css";

function PostView() {
  const navigate = useNavigate();
  const [posts, getPosts] = useState([]);

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
      getPosts(promise.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="pv-allposts-container">
      <Header />
      <h1 id="pv-title">News</h1>
      <h2>KLE Law College</h2>

      <div>
        <button className="pv-filter-button">Academic</button>
        <button className="pv-filter-button">Cultural Events</button>
        <button className="pv-filter-button">Sports</button>
      </div>

      <div className="pv-articles">
        {posts.map((post) => (
          <div key={post._id} className="pv-container">
            <h3 className="pv-post-title">{post.title}</h3>
            <p>By {post.author}</p>
            <p className="pv-body">{post.body.substring(0, 400)}...</p>
            <button
              onClick={() => {
                navigate("/fullpost", { state: post });
              }}
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostView;
