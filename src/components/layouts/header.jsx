"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import newLogo from "@/assets/new-logo.png";
import menuIcon from "@/assets/images/icons/menu.svg";
import {usePathname} from "next/navigation";
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
    return () => window.removeEventListener("scroll", changeLogo);
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
        className={`flex md:px-10 ease-out duration-300 px-5 justify-center sticky top-0 ${
          scrolled
            ? "md:h-16 shadow-md bg-opacity-80 backdrop-blur-sm h-20"
            : "h-20"
        } z-20 bg-white`}
      >
        <div className="w-10/12 h-full hidden md:flex items-center justify-between">
          <nav
            className="flex justify-center items-center gap-16 h-full font-jakarta"
            aria-label="منوی اصلی"
          >
            <Link
              className={`text-sm ease-out duration-200 hover:text-cardbg ${
                pathname === "/" ? "text-cardbg" : "text-black"
              } font-semibold leading-7`}
              href="/"
            >
              خانه
            </Link>
            <Link
              className={`text-sm ease-out duration-200 hover:text-cardbg ${
                pathname === "/about" ? "text-cardbg" : "text-black"
              } font-semibold leading-7`}
              href="/about"
            >
              درباره صحرا
            </Link>
          </nav>
          <div className="w-60 h-full flex items-center justify-center">
            <Image
              className="w-auto mx-auto object-contain"
              src={newLogo}
              width={200}
              height={80}
              alt="صحرا تجسم"
            />
          </div>
          <nav
            className="flex justify-center items-center gap-16 h-full font-jakarta"
            aria-label="منوی اصلی"
          >
            <Link
              className={`text-sm ease-out duration-200 hover:text-cardbg ${
                pathname === "/services" ? "text-cardbg" : "text-black"
              } font-semibold leading-7`}
              href="/services"
            >
              خدمات
            </Link>
            <Link
              className={`text-sm ease-out duration-200 hover:text-cardbg ${
                pathname === "/blog" ? "text-cardbg" : "text-black"
              } font-semibold leading-7`}
              href="/blog"
            >
              مقالات
            </Link>
            <Link
              className={`text-sm ease-out duration-200 hover:text-cardbg ${
                pathname === "/contact" ? "text-cardbg" : "text-black"
              } font-semibold leading-7`}
              href="/contact"
            >
              تماس
            </Link>
          </nav>
        </div>
        <div className="w-full h-full md:hidden flex justify-between items-center">
          <button onClick={() => setMobileHeaderOpen(true)}>
            <Image
              className="w-8 h-8"
              src={menuIcon}
              width={200}
              height={100}
              alt="منو"
            />
          </button>
          <Link href="/">
            <Image
              src={newLogo}
              width={160}
              height={60}
              alt="صحرا تجسم"
              className="object-contain"
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
