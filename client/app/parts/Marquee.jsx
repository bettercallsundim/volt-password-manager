"use client";
import discord from "@/public/discord-11.svg";
import messenger from "@/public/messenger.svg";
import next from "@/public/next.svg";
import vercel from "@/public/vercel.svg";
import viber from "@/public/viber.svg";
import visa from "@/public/visa.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const MarqueePart = () => {
  return (
    <div className="my-16 md:my-0 bg-white p-8 md:p-20 md:min-h-screen min-w-full">
      <p className="font-bold text-5xl text-center mb-28 underline unerline text-sky-900">
        Trusted By
      </p>
      <Marquee>
        <Image
          className="mr-16"
          priority
          height={80}
          width={80}
          src={discord}
        />
        <Image className="mr-16" priority height={80} width={80} src={viber} />
        <Image
          className="mr-16"
          priority
          height={80}
          width={80}
          src={messenger}
        />
        <Image className="mr-16" priority height={80} width={80} src={visa} />
        <Image className="mr-16" priority height={80} width={80} src={next} />
        <Image className="mr-16" priority height={80} width={80} src={vercel} />
      </Marquee>
    </div>
  );
};

export default MarqueePart;
