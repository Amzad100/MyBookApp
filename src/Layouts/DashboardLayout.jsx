import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const navLinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "black",
    };
  };
  return (
    // <>
    //   <div className="drawer lg:drawer-open">
    //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col mt-3 ml-3">
    //       {/* Page content here */}
    //       <Outlet />
    //     </div>
    //     <div className="drawer-side">
    //       <label
    //         htmlFor="my-drawer-2"
    //         aria-label="close sidebar"
    //         className="drawer-overlay"
    //       ></label>
    //       <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    //         {/* Sidebar content here */}
    //         <li>
    //           <NavLink style={navLinkstyle} to={"dashboard/allbooks"}>
    //             All Books
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink style={navLinkstyle} to={"dashboard/addbook"}>
    //             Add Book
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink style={navLinkstyle} to={"/"}>
    //             Home
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Dashboard</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <NavLink style={navLinkstyle} to={"dashboard/allbooks"}>
                    All Books
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkstyle} to={"dashboard/addbook"}>
                    Add Book
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkstyle} to={"/"}>
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <NavLink style={navLinkstyle} to={"dashboard/allbooks"}>
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkstyle} to={"dashboard/addbook"}>
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkstyle} to={"/"}>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
