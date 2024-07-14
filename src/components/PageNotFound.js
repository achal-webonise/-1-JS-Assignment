import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
