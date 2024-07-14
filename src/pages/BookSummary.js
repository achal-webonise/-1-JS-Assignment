import { useParams, Navigate, Link } from "react-router-dom";

const BookSummary = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <Navigate to="/books" />;
  }

  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.summary}</p>
      <Link to="/books">
        <button onClick={() => window.history.back()}>Back</button>
      </Link>
    </div>
  );
};

export default BookSummary;
