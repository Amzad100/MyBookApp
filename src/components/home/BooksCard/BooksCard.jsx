import SingleCard from "./SingleCard";

export default function BooksCard() {
  return (
    <div className="my-5">
      <h1 className="my-8 text-2xl font-bold text-center">All Books Here</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
}