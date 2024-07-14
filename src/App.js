import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import BookList from "./pages/BookList";
import BookSummary from "./pages/BookSummary";
import PageNotFound from "./components/PageNotFound";
import AuthContext from "./components/AuthContext";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books] = useState([
    {
      id: "1",
      name: "Book 1",
      summary:
        "Book 1 is a thrilling adventure that takes the reader on a journey through uncharted territories. The protagonist faces numerous challenges, discovering the true meaning of bravery and friendship. With unexpected twists and a gripping storyline, this book keeps readers on the edge of their seats until the very end.",
    },
    {
      id: "2",
      name: "Book 2",
      summary:
        "Book 2 explores the depths of human emotions and relationships. Set in a small town, the story revolves around a close-knit community dealing with love, loss, and redemption. The rich character development and poignant narrative offer a profound look into the human condition, making it a compelling read for all.",
    },
    {
      id: "3",
      name: "Book 3",
      summary:
        "Book 3 is a fascinating historical fiction that transports readers back to an ancient civilization. Through meticulous research and vivid storytelling, the author brings the past to life, revealing the struggles and triumphs of people long gone. It's an enlightening and entertaining exploration of history that resonates with the present.",
    },
  ]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleSignOut }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage onSignIn={handleSignIn} />} />
          <Route
            path="/books"
            element={
              isLoggedIn ? (
                <BookList username={username} books={books} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/books/:bookId"
            element={
              isLoggedIn ? <BookSummary books={books} /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {isLoggedIn && (
          <div>
            <Link to="/books">Book List</Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
