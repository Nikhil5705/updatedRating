import React, { useState } from "react";

import "./styles.css";
const genres = {
  Thriller: [
    {
      name: "Invisible (rating: 4.6/5)",
      author: "James Patterson"
    },
    {
      name: "The Atlantis Gene (rating: 4.5/5)",
      author: "A.G. Riddle"
    },
    {
      name: "First to Kill (rating: 4.2/5)",
      author: "Andrew Peterson"
    },
    {
      name: "Dark Places (rating: 3.5/5)",
      author: "Gillian Flynn"
    }
  ],
  Fiction: [
    {
      name: "Harry Potter and the Order of the Phoenix (rating: 4.7/5)",
      author: "J.K. Rowling"
    },
    {
      name: "Pride and Prejudice (rating: 4.3/5)",
      author: "Jane Austen"
    },
    {
      name: "The Thirteenth Tale (rating: 4.1/5)",
      author: "Diane Setterfield"
    },
    {
      name: "The Accidental Tourist (rating: 3.5/5)",
      author: "Anne Tyler"
    }
  ],
  Mystery: [
    {
      name: "A Deadly Inside Scoop (rating: 4.5/5)",
      author: "Abby Collette"
    },
    {
      name: "Mr. Mercedes (rating: 4.2/5)",
      author: "Stephen King"
    },
    {
      name: "Hercule Poirot (rating: 3.7/5)",
      author: "Agatha Christie"
    },
    {
      name: "Dublin Murder Squad (rating: 3.5/5)",
      author: "Tana French"
    }
  ],
  Fantasy: [
    {
      name: "	A Game of Thrones (rating: 4.5/5)",
      author: "George R.R. Martin"
    },
    {
      name: "The Name of the Wind (rating: 4/5)",
      author: "Patrick Rothfuss"
    },
    {
      name: "His Dark Materials (rating: 3.8/5)",
      author: "Philip Pullman"
    },
    {
      name: "The Lies of Locke Lamora (rating: 3.5/5)",
      author: "Scott Lynch"
    }
  ]
};
const genreList = Object.keys(genres);

export default function App() {
  const [genre, setGenre] = useState("Thriller");

  return (
    <div className="App">
      <h1> 📚 Suggestions</h1>
      <div>Get help to choose best one</div>
      <ul>
        {genreList.map((genre) => (
          <input
            type="button"
            key={genre}
            value={genre}
            onClick={() => setGenre(genre)}
          />
        ))}
      </ul>
      <hr />
      <ul className="books-list-container">
        {genres[genre].map((item, index) => (
          <div key={index}>
            <li className="book-card" style={{ border: "2px solid green" }}>
              <p className="name">Book: {item.name}</p>
              <p className="author">Author: {item.author}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
