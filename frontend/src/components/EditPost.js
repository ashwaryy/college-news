import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditPost() {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);
  const navigate = useNavigate();
  const handleEditBody = (event) => {
    setBody(event.target.value);
  };
  const handleEditTitle = (event) => {
    setTitle(event.target.value);
  };

  const SubmitHandler = () => {
    const apiURL = process.env.REACT_APP_API_ADDRESS;
    const postID = state._id;
    const fetchPosts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const url = `${apiURL}/posts/${postID}`;
      const reqbody = { title: title, body: body };
      const response = await fetch(url, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(reqbody),
      });
      const responseBody = await response.json();
      navigate("/fullpost", { state: responseBody.updatedPost[0] });
    };
    fetchPosts();
  };
  return (
    <div id="createp-body">
      <div id="createp-form">
        <h1>Edit News</h1>
        <label for="email" className="createp-label">
          Title:
        </label>
        <input
          type="text"
          id="createp-post-title"
          name="title"
          value={title}
          onChange={handleEditTitle}
          required
        />
        <label for="email" className="createp-label">
          Author: {state.author}
        </label>

        <label for="body" className="createp-label">
          Body:
        </label>
        <textarea
          id="createp-post-body"
          name="body"
          value={body}
          onChange={handleEditBody}
          required
        />
        <button className="createp-button" onClick={SubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditPost;
