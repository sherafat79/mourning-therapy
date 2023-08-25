import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";

function Header() {
  return (
    <header className="flex px-10 justify-center sticky top-0 h-20 z-10 bg-white">
      <div className="container h-full flex justify-between ">
        <div className="flex justify-center items-center  gap-16  h-full font-jakarta">
          <Link
            className="text-sm text-cardbg font-semibold leading-7 capitalize "
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-sm text-black font-semibold leading-7 capitalize "
            href="/about"
          >
            ABOUT ME
          </Link>
        </div>
        <div className="  w-60 h-full">
          <Image
            className="w-full mx-auto h-full"
            src={logo}
            width={200}
            height={100}
            alt="logo"
          />
        </div>
        <div className=" flex justify-center items-center  gap-16  h-full font-jakarta">
          <Link
            className="text-sm text-black  font-semibold leading-7 capitalize "
            href="/"
          >
            SERVICES
          </Link>
          <Link
            className="text-sm text-black font-semibold leading-7 capitalize "
            href="/"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
