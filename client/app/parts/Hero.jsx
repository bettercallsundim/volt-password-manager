"use client";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="gradient-bg min-h-screen text-white flex items-center px-4 md:px-20 justify-between overflow-hidden">
      <div className=" font-semibold text-2xl  md:text-4xl leading-[4rem] md:leading-[5rem] text-center md:text-left">
        <p>
          {" "}
          Secure your <span className="gradient-text ">Keys</span>
          <br />
          In unsecured <span className="gradient-text">World</span>
        </p>
        <p className="text-base font-normal w-[80%] mx-auto md:mx-0 md:w-[70%] mt-4 text-center md:text-left">
          Keep yourself, your loved ones, or your worldwide team safe using
          uncomplicated security measures, straightforward sharing of secrets,
          and reports that offer practical insights.
        </p>
        <p className="mt-6 md:mt-0">
          <Button className="bg-white text-black rounded-xl hover:text-white duration-500 hover:outline">
            Get Started
          </Button>
          <Button className="bg-gray-700 text-white rounded-xl ml-4 duration-500 hover:outline">
            Demo
          </Button>
        </p>
      </div>
      <div className="hidden md:block h-full rounded">
        <img
          className=" w-full h-full object-cover rounded "
          src="https://www.passcamp.com/blog/4-levels-of-password-security/images/rsz_4_levels_2-1024x655.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
