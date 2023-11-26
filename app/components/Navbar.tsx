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
  { name: "Home", href: "/Home" },
  { name: "Tv Shows", href: "/Home/Shows" },
  { name: "Movies", href: "/Home/Movies" },
  { name: "Recently Added", href: "/Home/RecentlyAdded" },
  { name: "My List", href: "/Home/User/List" },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8 max-lg:mb-10">
      <div className="flex items-center">
        <Link href="/Home" className="w-32">
          <Image src={logo} alt="netflixlogo" priority />
        </Link>

        <ul className="lg:flex gap-x-4 ml-14 hidden">
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
      <div className="flex items-center gap-x-8 ">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-g text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
