import React from "react";
import List from "../components/List";
const BookList = ({ user, books }) => {
  return (
    <div>
      <List books={books} />
    </div>
  );
};

export default BookList;
