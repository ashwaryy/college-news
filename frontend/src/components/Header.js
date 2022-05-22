import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header({ username }) {
  const navigate = useNavigate();
  function logOutHandler() {
    console.log("i ran");
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div>
      <div id="header-user-options">
        <div className="header-nav-links">
          <p
            id="header-back-arrow"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            id="header-back-arrow"
            onClick={() => {
              navigate("/posts");
            }}
          >
            News Page
          </p>
          <p
            id="header-back-arrow"
            onClick={() => {
              navigate("/add");
            }}
          >
            Add News
          </p>
        </div>

        <div>
          <h5>Logged in as: {username}</h5>
          <button onClick={logOutHandler} id="header-logout">
            <u>Logout</u>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
