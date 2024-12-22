import React from "react";

export const HomeAbouts = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] mx-[300px]">
      <div className="font-semibold text-headingText">About Us</div>
      <div className="flex gap-[5rem]">
        <div className="w-[100%] flex flex-col gap-[0.7rem]">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkongu.ac.in%2Fwebalbum%2Fimg%2Fkec.JPG&f=1&nofb=1&ipt=255926b4f1fd258ae53413bb1eb0e3032ac60fff7f5be0f44b861be0ef461b4d&ipo=images"
              className="h-[300px] w-[550px]"
            />
          </div>
          <div className="text-[20px]">About KEC</div>
          <hr className="text-black" />
          <p className="text-justify w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-info w-[100px] self-end text-white">
            More
          </button>
        </div>
        <div className="w-[100%] flex flex-col gap-[0.7rem]">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkongu.ac.in%2Fwebalbum%2Fimg%2Fkec.JPG&f=1&nofb=1&ipt=255926b4f1fd258ae53413bb1eb0e3032ac60fff7f5be0f44b861be0ef461b4d&ipo=images"
              className="h-[300px] w-[550px]"
            />
          </div>
          <div className="text-[20px]">About ICNCTSSS</div>
          <hr className="text-black" />
          <p className="text-justify w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-info w-[100px] self-end text-white">
            More
          </button>
        </div>
      </div>
    </div>
  );
};
