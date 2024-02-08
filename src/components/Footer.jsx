import React from "react";
import { logo2 } from "../assets";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="relative top-[100px] bg-orange-100">
      <div className="flex items-center justify-around">
        <div className="m-8">
          <img src={logo2} alt="logo" className="w-[100px] h-[100px]" />
          <p className="hidden sm:block text-[18px] font-normal">Browse various kinds of Exercises of your like and find them in an instance</p>
          <p className="hidden sm:block text-[18px] font-normal">your suggestions are most valuable to me as a developer</p>
        </div>
        <div className="">
          <h1 className="capitalize font-semibold text-[20px] sm:text-[25px]">
            Drop your suggestions at
          </h1>
          <div className="flex flex-col items-baseline justify-center gap-2 mt-4">
            <a href="https://github.com/Sajidsk7952" target="blank">
              <IoLogoGithub className="inline text-[16px] sm:text-[20px] mr-2" />
              <span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Github
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sajid-hussain-shaik-185554235/" target="blank">
              <FaLinkedin className="inline text-[16px] sm:text-[20px] mr-2" />
              <span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Linded In
              </span>
            </a>
            <a href="mailto:sksajidhussain2003@gmail.com" target="blank"><IoMail className="inline text-[16px] sm:text-[20px] mr-2" /><span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Mail me
              </span></a>
          </div>
        </div>
      </div>
      <div className="bg-black text-[18px] text-center w-full text-white capitalize">
        made with ❤️ by sajid hussain
      </div>
    </footer>
  );
};

export default Footer;
