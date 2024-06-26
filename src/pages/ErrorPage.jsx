import Lottie from "lottie-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorImage from "../assets/errorPage.json"
import useTitle from "../hooks/useTitle";

export default function ErrorPage() {
  useTitle('Error');
  return (
    <div>
      <div className="  flex justify-center items-center">
        <Link to="/">
          <button className=" text-center flex justify-center items-center gap-2 lg:mt-40 md:mt-10 mt-5 px-6 py-2 rounded-md bg-cyan-600 text-white">
            <FaArrowLeft />
            Back to Home
          </button>
        </Link>
      </div>

      <Lottie
        className="md:h-[75vh] h-full"
        animationData={errorImage}
        loop={true}
      />
    </div>
  )
}
