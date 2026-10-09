"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import newLogo from "@/assets/new-logo.png";
import menuIcon from "@/assets/images/icons/menu.svg";
import {usePathname} from "next/navigation";
import MobileHeader from "./mobileHeader";
import LanguageSwitcher from "./languageSwitcher";
import {stripLocale} from "@/i18n/config";
import {useI18n} from "@/i18n/provider";

function Header() {
  const {t, path} = useI18n();
  const pathname = stripLocale(usePathname());
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

  const linkClass = (href) =>
    `text-sm ease-out duration-200 hover:text-cardbg ${
      pathname === href ? "text-cardbg" : "text-black"
    } font-semibold leading-7`;

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
            className="flex justify-center items-center gap-12 h-full font-jakarta"
            aria-label={t.nav.mainAria}
          >
            <Link className={linkClass("/")} href={path("/")}>
              {t.nav.home}
            </Link>
            <Link className={linkClass("/about")} href={path("/about")}>
              {t.nav.about}
            </Link>
          </nav>
          <div className="w-60 h-full flex items-center justify-center">
            <Image
              className="w-auto mx-auto object-contain"
              src={newLogo}
              width={200}
              height={80}
              alt={t.nav.logoAlt}
            />
          </div>
          <nav
            className="flex justify-center items-center gap-12 h-full font-jakarta"
            aria-label={t.nav.mainAria}
          >
            <Link className={linkClass("/services")} href={path("/services")}>
              {t.nav.services}
            </Link>
            <Link className={linkClass("/blog")} href={path("/blog")}>
              {t.nav.blog}
            </Link>
            <Link className={linkClass("/contact")} href={path("/contact")}>
              {t.nav.contact}
            </Link>
            <LanguageSwitcher className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7 border border-line rounded-sm px-3" />
          </nav>
        </div>
        <div className="w-full h-full md:hidden flex justify-between items-center">
          <button onClick={() => setMobileHeaderOpen(true)}>
            <Image
              className="w-8 h-8"
              src={menuIcon}
              width={200}
              height={100}
              alt={t.nav.menu}
            />
          </button>
          <Link href={path("/")}>
            <Image
              src={newLogo}
              width={160}
              height={60}
              alt={t.nav.logoAlt}
              className="object-contain"
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
