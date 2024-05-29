import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import useTitle from "../hooks/useTitle";

export default function About() {
  useTitle("AboutUs");
  return (
    <div>
      <div id="shadow" className="w-full mx-auto">
        <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mt-6">
          <h1 className="text-3xl lg:text-5xl font-bold uppercase">About us</h1>
          <p className="font-light text-xl leading-tight lg:text-2xl tracking-wide w-3/4 mx-auto">
            This help us to improve our service and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 ">
          <div>
            <div className=" text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl mt-6 font-bold lg:mt-0 uppercase tracking-wide">
                Our History
              </h1>
              <p className="text-gray-500 leading-tight mt-4">
                The concept of our innovative book application was born out of a
                passion for reading and a desire to enhance the way individuals
                access and enjoy books. Recognizing the limitations of
                traditional reading methods, our team set out to develop a
                platform that combines the convenience of digital technology
                with the immersive experience of physical books.
              </p>
            </div>
            <div className=" text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl mt-6 font-bold lg:mt-3 uppercase tracking-wide">
                Our Vision
              </h1>
              <p className="text-gray-500 leading-tight mt-4">
                Our vision for the book application is to create the ultimate
                digital reading experience that caters to the diverse
                preferences of readers worldwide. We aim to provide a platform
                where users can discover, read, and interact with books in a way
                that feels personal and engaging. We envision a future where our
                application becomes the go-to destination for book lovers,
                offering an extensive library that spans various genres,
                languages, and formats.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" bg-slate-300">
              <img
                className="w-full h-3/4"
                src="https://i.ibb.co/kK3yD11/amzad.jpg"
                alt=""
              />
              <div className="flex justify-center items-center h-1/4">
                <div className="text-center">
                  <p>Mohammad Amzadul Islam</p>
                  <div className="grid grid-flow-col gap-4 mt-2">
                    <a href="https://www.facebook.com/">
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin></FaLinkedin>
                    </a>
                    <a href="https://twitter.com/">
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href="https://www.instagram.com/">
                      <FaInstagram></FaInstagram>
                    </a>
                    <a href="https://youtube.com/">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-300">
              <img
                className="w-full h-3/4"
                src="https://i.ibb.co/XDXVRCK/293784236-3380542848895534-2360501403880448694-n.jpg"
                alt=""
              />
              <div className="flex justify-center items-center h-1/4">
                <div className="text-center">
                  <p>Sirajul Islam Azad</p>
                  <div className="grid grid-flow-col gap-4 mt-2">
                    <a href="https://www.facebook.com/">
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin></FaLinkedin>
                    </a>
                    <a href="https://twitter.com/">
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href="https://www.instagram.com/">
                      <FaInstagram></FaInstagram>
                    </a>
                    <a href="https://youtube.com/">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
