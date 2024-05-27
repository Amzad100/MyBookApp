import SingleCard from "./SingleCard";

export default function BooksCard() {
  return (
    <div id="aboutus" className="my-5">
      <h1 className="my-8 text-2xl font-bold text-center">All Books Here</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
}