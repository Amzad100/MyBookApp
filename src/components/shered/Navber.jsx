import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaLockOpen } from "react-icons/fa";

export default function Navber() {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contactUs"}>Contact Us</Link>
              </li>
              {user && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to={"/"}>
            MyBook
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contactUs"}>Contact Us</Link>
            </li>
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          {user && (
            <Link onClick={handleLogOut} className="btn mr-1">
              <FaLockOpen className="me-2" />
              Logout
            </Link>
          )}
          {!user && (
            <>
              <Link to="/login" className="btn mr-1">
                Login
              </Link>
              <Link to="/signup" className="btn mr-1">
                SignUp
              </Link>
            </>
          )}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
