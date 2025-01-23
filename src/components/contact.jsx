import React from "react";
import Email from "../../public/assets/email.svg";
import LIN from "../../public/assets/linkedIn.svg";
import GH from "../../public/assets/github.svg";
import INSTA from "../../public/assets/insta.svg";
import BENTO from "../../public/assets/bento.svg";
function Contact() {
  const contact = [
    {
      title: "Email",
      icon: Email,
      url: "mailto:aadityapaul2006@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: LIN,
      url: "https://www.linkedin.com/in/aaditya-paul/",
    },
    {
      title: "GitHub",
      icon: GH,
      url: "https://github.com/aaditya-paul/",
    },
    {
      title: "Instagram",
      icon: INSTA,
      url: "https://www.instagram.com/__the.frustrated.guy__/",
    },
    {
      title: "Bento",
      icon: BENTO,
      url: "https://bento.me/aaditya-paul",
    },
  ];
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 md:left-[-20%] -left-[50%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 md:right-[-20%] -right-[50%] md:top-[-10%] top-[70%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.15),rgba(255,255,255,0))]"></div>
      <div className=" flex flex-col h-screen w-screen text-white">
        <div
          className=" text-3xl md:text-[48px] font-poppins text-center md:text-right md:mx-64 md:my-24 mx-5 my-12 "
          style={{
            textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
          }}
        >
          Reach Me Out....
        </div>
        <div className="md:justify-center md:items-center flex flex-col md:flex-row gap-5 md:gap-12 h-full">
          {contact.map((contact, index) => (
            <a key={index} href={contact.url} target="_blank">
              <div className=" hover:border-orange-400 transition-all ease-in rounded-2xl md:-mt-36 md:px-12 px-5 py-5 mx-5 md:py-4 border-white border">
                <img
                  src={contact.icon}
                  className="w-[50px] h-[50px] border-white"
                ></img>
                <div className="text-lg font-fira-code">{contact.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
