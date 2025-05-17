import React from "react";
import Marquee from "react-fast-marquee";
import Scopus from "../Assets/Scopus_JPG.avif";

export const InfiniteScroll = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[2rem]">
      <div className="uppercase text-headingText font-semibold">Indexed By</div>
      <div className="mx-[300px] w-auto">
        <Marquee pauseOnHover={true} autoFill={true}>
          <div className="flex gap-[2rem]">
            <img src={Scopus} />
            <img
              src={
                "https://static.wixstatic.com/media/6685d7_a0abe99403224de7acdc62d90a6317a5~mv2.png/v1/fill/w_92,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EI%20Compendex.png"
              }
            />
            <img src={Scopus} />
            <img src={Scopus} />
            <img src={Scopus} />
          </div>{" "}
        </Marquee>
      </div>
    </div>
  );
};
