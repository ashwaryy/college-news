import "./AllPosts.css";
import LoginPage from "./LoginPage";
import PostView from "./PostView";
function AllPosts() {
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
        <PostView />
      </div>
    );
  }
}

export default AllPosts;
