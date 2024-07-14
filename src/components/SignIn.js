import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (
      username.length >= 5 &&
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      onSignIn(username);
      navigate("/books");
    } else {
      alert("Invalid username or password format.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
