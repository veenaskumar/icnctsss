import React from "react";
import "../Stylesheet/Navbar.css";
import { Link } from "react-router-dom";
import icnctss from "../Assets/ICNCTSSS_Logo.png";
import keclogo from "../Assets/kec_logo.jpg";
export const Navbar = () => {
  return (
    <div className="bg-[#074799] h-[230px] lg:mx-[100px]">
      <div className="flex justify-evenly items-center">
        <div>
          <img src={icnctss} alt="icnctsslogo" className="h-[150px]" />
        </div>
        <div>
          <div className=" flex flex-col items-center text-[42.5px] font-bold text-white tracking-wider">
            INTERNATIONAL CONFERENCE ON
          </div>
          <hr />
          <div className="flex flex-col gap-[0.3rem]">
            <div className="text-white pt-[5px] font-semibold uppercase">
              Next-Generation Computing Technology for a Smart and Sustainable
              Society (ICNCTSSS - 2025)
            </div>
            <div className="flex items-center justify-center text-white">
              <div>
                Kongu Engineering College , Perundurai , Tamilnadu , India
                &ensp;
                <span>|</span>
              </div>
              <div>&ensp;December 20- 21 , 2024</div>
            </div>{" "}
          </div>
        </div>
        <div>
          <img src={keclogo} alt="keclogo" className="h-[120px] rounded-full" />
        </div>
      </div>
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
              <div className="hidden lg:min-w-[100%] lg:block">
                <ul className="menu menu-horizontal text-white nav-item text-navItem lg:flex lg:justify-center ">
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
    </div>
  );
};
