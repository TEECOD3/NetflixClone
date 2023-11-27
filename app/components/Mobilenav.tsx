"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

type Props = {};
interface linkprops {
  name: string;
  href: string;
}
const links: linkprops[] = [
  { name: "Tv Shows", href: "/Home/Shows" },
  { name: "Movies", href: "/Home/Movies" },
];

const Mobilenav = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="w-full lg:hidden mx-auto flex items-center justify-between  sm:px-6  lg:px-8 max-lg:mb-2">
      <div className="flex items-center">
        <ul className="flex gap-x-4">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav;
