import Banner from "../components/home/Banner";
import BooksCard from "../components/home/BooksCard/BooksCard";
import useTitle from "../hooks/useTitle";
import About from "./About";

export default function HomePage() {
  useTitle('Home');
  return (
    <>
      <div  className="max-w-7xl mx-auto">
        <Banner />
        <BooksCard/>
        <About/>
      </div>
    </>
  );
}
