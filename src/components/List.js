import React from "react";
import { Link } from "react-router-dom";
//List
const List = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((books) => (
          <li key={books.id}>
            <Link to={`/books/${books.id}`}>{books.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
};

export default List;
