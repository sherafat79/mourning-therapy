"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import mobileLogo from "@/assets/images/icons/mobile-logo.svg";
import menuIcon from "@/assets/images/icons/menu.svg";
import { usePathname } from "next/navigation";
import MobileHeader from "./mobileHeader";

function Header() {
  const pathname = usePathname();
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const changeLogo = () => {
    if (window.scrollY >= 160) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);
  }, []);
  return (
    <>
      {mobileHeaderOpen && (
        <MobileHeader
          path={pathname}
          onClose={() => setMobileHeaderOpen(false)}
        />
      )}
      <header
        className={`flex md:px-10  ease  duration-700   px-5 justify-center sticky top-0  ${
          scrolled
            ? "md:h-16 shadow-md bg-opacity-80 backdrop-blur-sm h-20"
            : "h-20"
        }   z-10 bg-white`}
      >
        <div className="w-10/12  h-full hidden md:flex items-center justify-between ">
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
          <div className={`w-60  h-full  `}>
            <Image
              className="w-full mx-auto h-full"
              src={scrolled ? mobileLogo : logo}
              width={scrolled ? 200 : 200}
              height={scrolled ? 200 : 100}
              alt="logo"
            />
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
        <div className="w-full h-full md:hidden flex justify-between items-center ">
          <Link href="/">
            <Image src={mobileLogo} width={200} height={100} alt="logo" />
          </Link>
          <button onClick={() => setMobileHeaderOpen(true)}>
            <Image
              className="w-8 h-8"
              src={menuIcon}
              width={200}
              height={100}
              alt="logo"
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
