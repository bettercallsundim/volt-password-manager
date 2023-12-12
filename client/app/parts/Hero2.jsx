import { memo } from "react";

import { FaKey } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdBroadcastOnPersonal } from "react-icons/md";
const Hero2 = memo(() => {
  return (
    <div className="min-h-screen min-w-full text-white px-8 md:px-20  gradient-bg">
      <section className="py-20">
        <h1 className="text-2xl md:text-5xl text-center md:leading-[4rem]">
          Effortlessly protect passwords, access keys, and confidential data.
        </h1>
        <div className="flex flex-col md:flex-row gap-y-8 items-center justify-between mt-16">
          <div className="text-center w-[70%] md:w-[25%] bg-white rounded-xl text-black p-6">
            <p className="text-center">
              <MdBroadcastOnPersonal className="mx-auto text-6xl text-pink-700" />
            </p>
            <h2 className="font-bold text-center leading-[2.5rem]">Personal</h2>

            <p className="text-center text-sm leading-[1.5rem]">
              Simple password management for you and your family, 24/7.
            </p>
          </div>
          <div className="text-center w-[70%] md:w-[25%] bg-white rounded-xl text-black p-6">
            <p className="text-center">
              <FaKey className="mx-auto text-6xl text-green-700" />
            </p>
            <h2 className="font-bold text-center leading-[2.5rem]">Business</h2>

            <p className="text-center text-sm leading-[1.5rem]">
              Safeguard your company by prioritizing the security of your
              employees.
            </p>
          </div>
          <div className="text-center w-[70%] md:w-[25%] bg-white rounded-xl text-black p-6">
            <p className="text-center">
              <GrSecure className="mx-auto text-6xl text-sky-700" />
            </p>
            <h2 className="font-bold text-center leading-[2.5rem]">
              Enterprise
            </h2>

            <p className="text-center text-sm leading-[1.5rem]">
              Gain the flexibility to take bold steps without facing major
              risks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Hero2;
