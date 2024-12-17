import React from "react";
import "../Stylesheet/Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="lg:mx-[70px]">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar">
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
                  className="inline-block h-6 w-6 stroke-current"
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
            <div className="hidden lg:block mx-2 flex-1 px-2 text-black">
              Navbar Title
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-black nav-item text-navItem">
                {/* Navbar menu content here */}
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/about">About KEC</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/committee">Committee</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/keynotes">Keynote Talks</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link>Call For Papers</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/impdates">Important Dates</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent">
                    <Link to="/workshop">Workshops</Link>
                  </a>
                </li>
                {/*  <li>
                  <details>
                    <summary className="hover:bg-transparent active:bg-transparent">
                      Previous Conferences
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li> */}
                <li>
                  <a className="hover:bg-transparent">Previous Conferences</a>
                </li>
                <li>
                  <a className="hover:bg-transparent">Registeration</a>
                </li>
                <li>
                  <a className="hover:bg-transparent">Others</a>
                </li>
                <li>
                  <a className="hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#ffffff] min-h-full w-80 p-4 text-black text-navItem sm-nav-item">
            {/* Sidebar content here */}
            <li>
              <a className="hover:bg-transparent">Home</a>
            </li>
            <li>
              <a className="hover:bg-transparent">About KEC</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Committee</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Keynote Talks</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Call For Papers</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Important Dates</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Workshops</a>
            </li>
            {/*  <li>
                  <details>
                    <summary className="hover:bg-transparent active:bg-transparent">
                      Previous Conferences
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li> */}
            <li>
              <a className="hover:bg-transparent">Previous Conferences</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Registeration</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Others</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Contact</a>
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};
