import React from "react";
import keclogo from "../Assets/kec_logo2.png";
// import { Gmap } from "../Components/Gmap";
export const Footer = () => {
  return (
    <footer className="footer bg-[#074790] text-neutral-content p-10 mt-[70px] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-[30rem] w-full">
        <nav className="flex flex-col gap-[0.3rem] items-center">
          <img src={keclogo} className="h-[100px] w-[100px] object-cover" />
          <div>Kongu Engineering College </div>
          <div>Perundurai , Erode 638 060 </div>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div>Kanimozhiselvi C.S - 98421 68224</div>
          <div>Kogilavani - 94861 53223</div>
          <div>icncstsss@gmail.com</div>
        </nav>
      </div>
      <aside className="">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};
