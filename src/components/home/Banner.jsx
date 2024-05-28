import Lottie from "lottie-react";
import homepagelotti from "../../assets/homepage.json"

export default function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between items-center md:gap-10 h-[90vh] w-[80%] mx-auto md:my-10 py-5 pb-10">
      <div className="md:my-[100px] my-[30px]">
        <h1 className="text-5xl">My Book</h1>
        <p className="text-4xl my-5">Education</p>
        <p>
          My book is an innovative online platform designed to provide students
          where a students find their academic books.
        </p>
        <div className="my-5">
          <button>Login</button>
        </div>
      </div>
      <div className="my-[20px] md:my-0">
        <Lottie animationData={homepagelotti}></Lottie>
      </div>
    </div>
  );
}
