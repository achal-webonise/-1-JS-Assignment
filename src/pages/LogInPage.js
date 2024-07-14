import React from "react";
import SignIn from "../components/SignIn";

const LogInPage = ({ onSignIn }) => {
  return (
    <div>
      <SignIn onSignIn={onSignIn} />
    </div>
  );
};

export default LogInPage;
