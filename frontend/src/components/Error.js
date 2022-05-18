import React from "react";
import "./Error.scss";
function Error() {
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong!</h1>
      <div
        className="btn"
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
      >
        Go Back
      </div>
    </div>
  );
}

export default Error;
