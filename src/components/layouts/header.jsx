"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex px-10 justify-center sticky top-0 h-20 z-10 bg-white">
      <div className="container h-full flex justify-between ">
        <div className="flex justify-center items-center  gap-16  h-full font-jakarta">
          <Link
            className={`text-sm ease-in-out duration-500 hover:text-cardbg ${
              pathname === "/" ? "text-cardbg" : "text-black"
            } font-semibold leading-7 capitalize`}
            href="/"
          >
            HOME
          </Link>
          <Link
            className={`text-sm  ease-in-out duration-500 hover:text-cardbg ${
              pathname === "/about" ? "text-cardbg" : "text-black"
            } font-semibold leading-7 capitalize`}
            href="/about"
          >
            ABOUT ME
          </Link>
        </div>
        <div className="  w-60 h-full">
          <Link href="/">
            <Image
              className="w-full mx-auto h-full"
              src={logo}
              width={200}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
        <div className=" flex justify-center items-center  gap-16  h-full font-jakarta">
          <Link
            className={`text-sm ease-in-out duration-500 hover:text-cardbg ${
              pathname === "/services" ? "text-cardbg" : "text-black"
            } font-semibold leading-7 capitalize`}
            href="/services"
          >
            SERVICES
          </Link>
          <Link
            className={`text-sm ease-in-out duration-500 hover:text-cardbg ${
              pathname === "/contact" ? "text-cardbg" : "text-black"
            } font-semibold leading-7 capitalize`}
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
