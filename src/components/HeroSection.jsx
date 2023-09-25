import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[484px] relative">
      <img
        class="w-[669px] h-[484px] left-[673px] top-0 absolute rounded-[161.66px]"
        src="client\src\assets\8489144.jpg"
        alt="IMG"
      />
      <div class="w-[589px] h-[411.79px] left-0 top-[32px] absolute flex-col justify-center items-start gap-[58px] inline-flex">
        <div class="text-black text-[54.62px] font-normal font-['Rammetto One']">
          Ride. Share. Save
        </div>
        <div class="text-black text-2xl font-normal font-['Puritan']">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt <br />
          ut labore et dolore magna aliqua. Ut enim ad
          <br /> minim veniam, quis nostrud exercitation ullamco <br />
          laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div class="w-[257.52px] h-[68.79px] relative">
          <div class="left-[56px] top-[14.05px] absolute text-center text-white text-2xl font-normal font-['Rammetto One']">
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
