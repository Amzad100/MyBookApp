import { useEffect, useState } from "react";
import SingleBookCardDashboard from "./SingleBookCardDashboard";

export default function Allbooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All books here</h1>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Titel</th>
              <th>Author</th>
              <th>Price</th>
              <th>View Details</th>
              <th>Update Book</th>
              <th>Delete Book</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <SingleBookCardDashboard
                key={book.id}
                book={book}
              ></SingleBookCardDashboard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
