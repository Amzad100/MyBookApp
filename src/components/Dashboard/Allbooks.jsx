import { useEffect, useState } from "react"
import SingleCard from "../home/BooksCard/SingleCard";

export default function Allbooks() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data)=> setBooks(data));
  })

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All books here</h1>
      <div className="my-16 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          books.map(book=><SingleCard key={book.id} book={book}></SingleCard>)
        }
      </div>
    </div>
  )
}
