import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import BooksCard from "../components/home/BooksCard/BooksCard";
import useTitle from "../hooks/useTitle";
import About from "./About";
import ContactUs from "./ContactUs";
import ReviewSectionHome from "../components/home/ReviewSection/ReviewSectionHome";

export default function HomePage() {
  const data = useLoaderData();
  useTitle("Home");
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Banner />
        <BooksCard data={data} />
        <About />
        <ReviewSectionHome />
        <ContactUs />
      </div>
    </>
  );
}
