import React, { useState } from "react";
import "../Stylesheet/Navbar.css";
import { NavLink } from "react-router-dom";
import icnctss from "../Assets/ICNCTSSS Logo new.png";
import keclogo from "../Assets/kec_logo2.png";

export const Navbar = () => {
  const [close, setclose] = useState(false);
  const handleClose = () => {
    setclose(true);
  };
  return (
    <div className="bg-[#074799] lg:h-[230px] h-[80px] lg:mx-[100px]">
      <div className="lg:flex lg:justify-evenly lg:items-center">
        <div className="lg:block hidden">
          <img
            src={icnctss}
            alt="icnctsslogo"
            className="lg:h-[150px] h-[50px]"
          />
        </div>
        <div className="hidden lg:block">
          <div className=" lg:flex flex-col items-center text-[42.5px] font-bold text-white tracking-wider">
            INTERNATIONAL CONFERENCE ON
          </div>
          <hr />
          <div className="hidden lg:flex flex-col gap-[0.3rem]">
            <div className="text-white pt-[5px] font-semibold uppercase">
              Next-Generation Computing Technology for a Smart and Sustainable
              Society (ICNCTSSS - 2025)
            </div>
            <div className="hidden lg:flex items-center justify-center text-white">
              <div>
                Kongu Engineering College , Perundurai , Tamilnadu , India
                &ensp;
                <span>|</span>
              </div>
              <div>&ensp;December 20- 21 , 2024</div>
            </div>{" "}
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={keclogo} alt="keclogo" className="h-[140px] rounded-full" />
        </div>
      </div>
      <div className="lg:mx-[70px]">
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <div className="navbar grid justify-items-start grid-flow-col">
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
              <div className="lg:hidden">
                <img
                  src={icnctss}
                  alt="icnctsslogo"
                  className="lg:h-[150px] h-[50px]"
                />
              </div>
              <div className="hidden lg:min-w-[100%] lg:block">
                <ul className="menu menu-horizontal text-white nav-item text-navItem lg:flex lg:justify-center ">
                  {/* Navbar menu content here */}
                  <li>
                    <a className="hover:bg-transparent">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-[#64ffda]" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </a>
                  </li>
                  {/*  <li>
                    <a className="hover:bg-transparent">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-[#64ffda]" : ""
                        }
                      >
                        About KEC
                      </NavLink>
                    </a>
                  </li> */}
                  <li className="z-10 text-black">
                    <details>
                      <summary className="text-white">About</summary>
                      <ul className={`bg-base-100 rounded-t-none p-2`}>
                        <li className="dropdown-nav">
                          <NavLink
                            to="/aboutkec"
                            className={({ isActive }) =>
                              isActive ? "text-[#074799]" : ""
                            }
                            onClick={handleClose}
                          >
                            KEC
                          </NavLink>
                        </li>
                        <li className="dropdown-nav">
                          <NavLink
                            to="/abouticnctsss"
                            className={({ isActive }) =>
                              isActive ? "text-[#074799]" : ""
                            }
                          >
                            ICNCTSSS
                          </NavLink>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a className="hover:bg-transparent">
                      <NavLink
                        to="/committee"
                        className={({ isActive }) =>
                          isActive ? "text-[#64ffda]" : ""
                        }
                      >
                        Committee
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-transparent">
                      <NavLink
                        to="/keynotes"
                        className={({ isActive }) =>
                          isActive ? "text-[#64ffda]" : ""
                        }
                      >
                        Keynote Talks
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-transparent">
                      <NavLink>Call For Papers</NavLink>
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-transparent">
                      <NavLink
                        to="/impdates"
                        className={({ isActive }) =>
                          isActive ? "text-[#64ffda]" : ""
                        }
                      >
                        Important Dates
                      </NavLink>
                    </a>
                  </li>
                  {/*  <li>
                  <details>
                    <summary className="hover:bg-transparent active:bg-transparent">
                      Previous Conferences
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>NavLink 1</a>
                      </li>
                      <li>
                        <a>NavLink 2</a>
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
              {/*  <li>
                  <details>
                    <summary className="hover:bg-transparent active:bg-transparent">
                      Previous Conferences
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>NavLink 1</a>
                      </li>
                      <li>
                        <a>NavLink 2</a>
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
