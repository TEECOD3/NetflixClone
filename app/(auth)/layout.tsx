import Image from "next/image";
import React, { ReactNode } from "react";
import backgroundImage from "../../public/login_background.jpg";
import logo from "../../public/netflix_logo.svg";

type Props = {
  children: ReactNode;
};

const Authlayout = ({ children }: Props) => {
  return (
    <div className="relative h-screen w-screen md:flex flex-col md:items-center md:justify-center md:bg-transparent bg-black">
      <Image
        src={backgroundImage}
        alt="login background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={logo}
        alt="netflix logo"
        width={120}
        height={120}
        priority
        className="absolute top-4 lef-4 object-contain md:left-10 md:top-10"
      />
      {children}
    </div>
  );
};

export default Authlayout;
