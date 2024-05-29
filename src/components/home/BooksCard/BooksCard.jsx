import SingleCard from "./SingleCard";

// eslint-disable-next-line react/prop-types
export default function BooksCard({ data }) {
  console.log(data);
  return (
    <div id="shadow" className="my-5">
      <h1 className="my-8 text-2xl font-bold text-center">Books</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-middle">
        {
          // eslint-disable-next-line react/prop-types
          data.map((book) => (
            <SingleCard key={book.id} book={book} />
          ))
        }
      </div>
    </div>
  );
}
