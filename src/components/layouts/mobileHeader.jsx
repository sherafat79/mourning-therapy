import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileLogo from "@/assets/images/icons/mobile-logo.svg";
import closeIcon from "@/assets/images/icons/close.svg";

function MobileHeader({ onClose, path }) {
  return (
    <div className="h-screen w-full  fixed  top-0 right-0 transform z-50  overflow-y-auto   bg-mobilebg">
      <div className="px-5  h-20 ">
        <div className="w-full h-full md:hidden flex justify-between items-center ">
          <Link href="/">
            <Image src={mobileLogo} width={200} height={100} alt="logo" />
          </Link>
          <button onClick={onClose}>
            <Image
              className="w-8 h-8"
              src={closeIcon}
              width={200}
              height={100}
              alt="logo"
            />
          </button>
        </div>
      </div>
      <div className="px-8 font-jakarta uppercase font-bold text-black text-xl">
        <ul className="[&>li]:mb-6">
          <li>
            <Link
              onClick={onClose}
              className={` ${path === "/" && "text-cardbg"}`}
              href="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={` ${path === "/about" && "text-cardbg"}`}
              onClick={onClose}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={` ${path === "/services" && "text-cardbg"}`}
              onClick={onClose}
            >
              SERVICES
            </Link>
            <ul className="[&>li]:mb-6  px-8">
              <li className="mt-6">
                <Link href="/services?type=Individual" onClick={onClose}>
                  Individual Therapy
                </Link>
              </li>

              <li>
                <Link href="/services?type=Couples" onClick={onClose}>
                  Couples Therapy
                </Link>
              </li>

              <li>
                <Link href="/services?type=Family" onClick={onClose}>
                  Family Therapy
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={onClose}
              className={` ${path === "/contact" && "text-cardbg"}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileHeader;
