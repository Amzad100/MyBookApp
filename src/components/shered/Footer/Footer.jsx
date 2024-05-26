import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <div>
      <footer className="">
        <div className="bg-[#b4dfe5] my-footer">
          <div className="footer p-10  text-black flex justify-between flex-col md:flex-row">
            <div>
              <h1  className="btn btn-ghost text-xl">My Book</h1>
              <p className="pl-2">
                Book Service
                <br />
                Providing reliable Book since 2022
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg my-text">Services</span>
                <a className="link link-hover">Board Books</a>
                <a className="link link-hover">Job Books</a>
                <a className="link link-hover">Out Bboks</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg my-text">Menu</span>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
                <Link to="/viewAll" className="link link-hover">
                  All Books
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-lg my-text">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </div>
              <div className="flex flex-col gap-2">
                <SocialIcon></SocialIcon>
              </div>
            </div>
          </div>
        </div>
        <p className="bg-[#303c6c] text-[#d2fdff] py-3 text-center">
          © 2023 MyBook Services. <br /> Developed by Mohammad Amzadul Islam
        </p>
      </footer>
    </div>
  );
}
