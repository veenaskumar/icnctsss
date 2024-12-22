import React from "react";
import Abouticnctsss from "../Assets/abouticnctsss.webp";
import { FaCheck } from "react-icons/fa";
import Data from "../Assets/Data/workshop";
import { WorkshopCards } from "../Components/WorkshopCards";
export const AboutICNCTSSS = () => {
  return (
    <>
      <div className="relative">
        <img
          src={Abouticnctsss}
          className="max-h-[700px] min-w-full object-cover brightness-[60%]"
        />
        <div className="absolute top-0 flex flex-col gap-[2rem] w-[100%] h-[100%] justify-center items-center text-white">
          <div className="lg:text-headingText text-bodyText font-semibold">
            ICNCTSSS 2025
          </div>
          <div className="lg:mx-[300px] lg:text-justify text-[10px] mx-[10px] text-center lg:text-bodyText">
            &emsp;&emsp;&emsp; The International Conference on Next-Generation
            Computing Technologies for a Smart and Sustainable Society
            (ICNCTSSS, 2025) is a landmark event designed to showcase
            advancements in cutting-edge computing technologies and explore
            their transformative role in addressing global challenges. Scheduled
            for{" "}
            <span className="font-semibold">
              September 08–09, 2025, at Kongu Engineering College, Erode, Tamil
              Nadu,
            </span>{" "}
            this conference promises to be a vibrant hub for knowledge exchange,
            innovation, and collaboration.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[5rem]">
        <div className="flex flex-col items-center justify-center gap-[2rem] mt-[30px] w-full  ">
          <h2 className="lg:text-subHeadingText font-semibold text-bodyText">
            Vison and Purpose
          </h2>
          <p className="lg:mx-[300px] text-justify lg:w-[50%] mx-[10px] text-[10px] lg:text-bodyText">
            <span className="font-semibold">ICNCTSSS</span> envisions creating a
            global platform for researchers, academicians, industry leaders, and
            policymakers to discuss and present solutions powered by emerging
            technologies. The conference emphasizes the integration of
            technological progress with sustainable development, aiming to
            create smart societies that balance growth with environmental and
            social responsibility. The focus is on both theoretical advancements
            and practical applications in critical areas such as Artificial
            Intelligence (AI), Blockchain, Internet of Things (IoT), Edge
            Computing, and 5G communication systems. The event aims to bridge
            the gap between academic research and industrial applications,
            driving innovation that addresses contemporary challenges.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[2rem]">
          <h2 className="lg:text-subHeadingText font-semibold text-bodyText">
            Conference
          </h2>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-[3rem] lg:justify-between w-full lg:w-[50%]">
            <div>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2298408.jpg&f=1&nofb=1&ipt=1552ddd377610c1553f7ad38f01286c0656002a274f122b9c309da71401a6931&ipo=images"
                className="lg:max-h-[270px] max-h-[200px]"
              />
            </div>
            <ul className="lg:w-[50%] mx-[10px] flex flex-col gap-[1rem] justify-center items-center">
              <li className="flex items-center gap-[1rem] text-[12px] lg:text-bodyText">
                <span className="text-[#074790]">
                  <FaCheck />
                </span>
                <p>
                  Highlight advancements in next-generation computing
                  technologies.
                </p>
              </li>
              <li className="flex items-center gap-[1rem] text-[12px] lg:text-bodyText">
                <span className="text-[#074790]">
                  <FaCheck />
                </span>
                <p>
                  Foster interdisciplinary collaboration between academia,
                  industry, and policymakers.
                </p>
              </li>
              <li className="flex items-center gap-[1rem] text-[12px] lg:text-bodyText">
                <span className="text-[#074790]">
                  <FaCheck />
                </span>
                <p>
                  Promote innovative and sustainable solutions for societal
                  challenges.
                </p>
              </li>
              <li className="flex items-center gap-[1rem] text-[12px] lg:text-bodyText">
                <span className="text-[#074790]">
                  <FaCheck />
                </span>
                <p>
                  Equip participants with actionable insights and practical
                  skills through workshops and discussions.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center bg-[#F4F9FB] gap-[5rem] flex-col items-center">
          <h2 className="mt-[30px] lg:text-subHeadingText font-semibold text-bodyText">
            Conference Tracks
          </h2>
          <div className="flex lg:mx-[300px] mx-[10px] flex-wrap w-full lg:w-[60%] justify-between gap-[2rem] items-center mb-[40px]">
            <div className="card bg-base-100 lg:w-[500px] w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-[13px] lg:text-[20px]">
                  Emerging Technologies in AI and Automation
                </h2>
                <p className="text-[12px] lg:text-bodyText">
                  Topics include AI advancements, intelligent automation,
                  ethical considerations, and real-world applications in
                  healthcare, finance, and Industry 4.0.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 lg:w-[500px] w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-[13px] lg:text-[20px]">
                  Blockchain and Cybersecurity Innovations
                </h2>
                <p className="text-[12px] lg:text-bodyText">
                  Delve into blockchain applications for cybersecurity, supply
                  chain management, and decentralized systems while addressing
                  modern data privacy challenges.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 lg:w-[500px] w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-[13px] lg:text-[20px]">
                  IoT, Edge Computing, and Smart Solutions
                </h2>
                <p className="text-[12px] lg:text-bodyText">
                  Explore IoT architectures, edge computing solutions, and their
                  role in creating smart cities and IoT-enabled infrastructure,
                  especially in agriculture, healthcare, and environmental
                  monitoring.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 lg:w-[500px] w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-[13px] lg:text-[20px]">
                  Future Communication Technologies: 5G and Beyond
                </h2>
                <p className="text-[10px] lg:text-bodyText">
                  {" "}
                  Discuss 5G deployment, its integration with IoT, emerging
                  trends in telecommunications, and the innovations shaping
                  wireless communication systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-[300px] flex flex-col items-center gap-[2rem]">
          <h2 className="lg:text-subHeadingText font-semibold text-bodyText">
            Workshops
          </h2>
          <div className="lg:w-[90%]">
            <WorkshopCards WorkshopData={Data} />
          </div>
        </div>
      </div>
    </>
  );
};
