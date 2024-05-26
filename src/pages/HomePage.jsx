import Banner from "../components/home/Banner";
import BooksCard from "../components/home/BooksCard/BooksCard";
import About from "./About";

export default function HomePage() {
  return (
    <>
      <div>
        <Banner />
        <BooksCard/>
        <About/>
      </div>
    </>
  );
}
