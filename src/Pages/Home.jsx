import React from "react";
import { Carousel } from "../Components/Carousel";
import { HomeAbouts } from "../Components/HomeAbouts";
import { ConferenceTopics } from "../Components/ConferenceTopics";
import { InfiniteScroll } from "../Components/InfiniteScroll";
export const Home = () => {
  return (
    <div>
      <Carousel />
      <br />
      <br />
      <div className="flex flex-col gap-[3rem]">
        <HomeAbouts />
        <ConferenceTopics />
        <InfiniteScroll />
      </div>
    </div>
  );
};
