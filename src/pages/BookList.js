import React from "react";
import { Navigate } from "react-router-dom";
import List from "../components/List";
const BookList = ({ user, books }) => {
  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      <List books={books} />
    </div>
  );
};

export default BookList;
