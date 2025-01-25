import React from "react";
import Me from "../assets/mee.png";
function HeroSection() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen bg-black">
      <div className="w-full h-full text-white flex flex-col lg:flex-row justify-center items-center">
        <div className="  z-20 h-fit w-fit rounded-full ring-4 ring-orange-400 ">
          <img
            className=" md:w-[350px] md:h-[350px] w-[150px] h-[150px] rounded-full object-cover"
            src={Me}
          ></img>
        </div>
        <div className=" flex flex-col items-center p-16 md:p-24 gap-5">
          <div>
            <div
              style={{
                textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
              }}
              className="  md:text-[64px] text-[32px] font-playwrite font-medium  "
            >
              Hello There!{" "}
            </div>{" "}
          </div>
          <div className="  md:text-[36px] text-[18px] text-center md:text-right font-ubuntu">
            I&apos;m Aaditya Paul,<br></br> a Full-Stack Developer,<br></br>{" "}
            Hailing from West Bengal, India.
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          window.scrollBy(0, window.innerHeight);
        }}
        className=" cursor-pointer text-white p-4 font-playwrite animate-bounce "
      >
        scroll down to learn more ↓
      </div>
    </div>
  );
}

export default HeroSection;
