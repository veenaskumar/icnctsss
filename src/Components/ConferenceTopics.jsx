import React from "react";
import "../Stylesheet/ConferenceTopics.css";
export const ConferenceTopics = () => {
  return (
    <div
      className="bg-[url('https://images.pexels.com/photos/14303316/pexels-photo-14303316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover h-[700px] relative bg-fixed"
      id="background"
    >
      <div className="text-white absolute flex flex-col justify-center items-center gap-[8rem] w-full h-full">
        <div className="text-white text-headingText font-semibold">
          Conference Topics
        </div>
        <div className="flex mx-[300px] justify-evenly w-full">
          <ul className="flex flex-col gap-[0.5rem] list-disc">
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
          </ul>
          <ul className="flex flex-col gap-[0.5rem] list-disc">
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
            <li>Signal Processing &Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
