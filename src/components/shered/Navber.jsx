import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaLockOpen } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Navber() {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "LogOut successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const navLinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "black",
    };
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
                <NavLink style={navLinkstyle} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkstyle} to={"/about"}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkstyle} to={"/contactUs"}>
                  Contact Us
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink style={navLinkstyle} to={"/dashboard"}>
                    Dashboard
                  </NavLink>
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
              <NavLink style={navLinkstyle} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkstyle} to={"/about"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkstyle} to={"/contactUs"}>
                Contact Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink style={navLinkstyle} to={"/dashboard"}>
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          {user && (
            <Link onClick={handleLogOut} className="btn mr-1">
              <FaLockOpen className="me-2 my-btn" />
              Logout
            </Link>
          )}
          {!user && (
            <>
              <Link to="/login" className="my-btn mr-1">
                Login
              </Link>
              <Link to="/signup" className="my-btn mr-1">
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
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
