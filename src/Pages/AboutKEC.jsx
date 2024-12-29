import React from "react";
import { FaCheck } from "react-icons/fa";

export const AboutKEC = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.agarum.com%2Fphotos%2F1%2F1%2F8%2F251%2Fc%2Fl%2Fa35a93f95c9a649ef98b69f73fb80a53.jpg&f=1&nofb=1&ipt=ffa4df70f4c80164c2057fcf41a738b083d4e002f739b30303b8014d1cc43cab&ipo=images"
          className="max-h-[700px] min-w-full object-cover brightness-[60%]"
        />
        <div className="absolute top-0 text-white flex flex-col items-center h-full justify-center gap-[3rem]">
          <h2 className="font-semibold text-subHeadingText">
            KONGU ENGINEERING COLLEGE
          </h2>
          <p className="mx-[300px] text-center ">
            <span className="font-semibold"> Kongu Engineering College</span>, a
            leading research oriented institution with excellent facilities, is
            run by Kongu Vellalar Institute of Technology Trust and was
            established in the year 1984. The Programmes of the institute are
            accredited by NBA and the institute is accredited by NAAC with A++
            grade. It is an autonomous institution affiliated to Anna
            University, Chennai.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <h2 className="lg:text-subHeadingText font-semibold text-bodyText">
          About KEC
        </h2>
        <div className="flex lg:flex-row border border-red-400 flex-col justify-center items-center gap-[3rem] lg:justify-between w-full lg:w-[50%]">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2298408.jpg&f=1&nofb=1&ipt=1552ddd377610c1553f7ad38f01286c0656002a274f122b9c309da71401a6931&ipo=images"
              className="lg:-h-[270px] max-h-[200px]"
            />
          </div>
          <div>
            <p className="w-[50%]">
              It consists of 167 acres of land richly endowed with beautiful
              Greenland. The college has completed 40 years of dedicated and
              excellent service to the people of India and abroad in the field
              of Technical Education. The college offers 17 UG Programmes, 7 PG
              Programmes and 21 Research Programmes in Engineering, Applied
              Sciences and Management.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
