import React from "react";

function Footer() {
  return (
    <div className=" md:relative md:-top-36 md:py-0 py-12 font-fira-code flex flex-col items-center justify-center text-white bg-black">
      <div>
        Made By{" "}
        <span className=" font-playwrite text-orange-300 ">Aaditya Paul.</span>
      </div>
      <div>Copyright © 2025.</div>
      <a
        href="/aadi-portfolio/resume.pdf"
        // download="Aaditya-Paul-Resume.pdf" // Optional: Rename the downloaded file
        className=" underline underline-offset-4 py-2 cursor-pointer"
      >
        Download Resume 📁
      </a>
    </div>
  );
}

export default Footer;
