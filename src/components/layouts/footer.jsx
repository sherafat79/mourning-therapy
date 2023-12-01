import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="   w-full static bottom-0 footer-bg  bg-no-repeat bg-cover  ">
      <div className=" container  pt-6 pb-4  mx-auto">
        <div className="flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center  md:gap-[5.75rem] gap-8">
          <div className="flex items-center md:items-start flex-col gap-6">
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/"
            >
              HOME
            </Link>{" "}
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/about"
            >
              ABOUT ME
            </Link>{" "}
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/"
            >
              FORM
            </Link>{" "}
            <Link
              className="text-sm text-black ease-in-out duration-500 hover:text-cardbg font-semibold leading-7 capitalize "
              href="/contact"
            >
              CONTACT
            </Link>
          </div>
          <Link className="block md:hidden" href="/">
            <Image
              className="w-full mx-auto h-full"
              src={logo}
              width={200}
              height={100}
              alt="logo"
            />
          </Link>
          <div className="flex items-center md:items-start flex-col gap-6">
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/"
            >
              INSTAGRAM
            </Link>{" "}
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/"
            >
              FACEBOOK
            </Link>{" "}
            <Link
              className="text-sm ease-in-out duration-500 hover:text-cardbg text-black font-semibold leading-7 capitalize "
              href="/"
            >
              LINKEDIN
            </Link>{" "}
          </div>
        </div>
      </div>
      <hr className="text-line mt-6 md:mt-5" />
      <p className="font-jakarta py-4 text-base font-extrabold leading-7 text-center">
        © 2023, All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
