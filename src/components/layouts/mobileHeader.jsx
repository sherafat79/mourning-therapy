import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileLogo from "@/assets/images/icons/mobile-logo.svg";
import closeIcon from "@/assets/images/icons/close.svg";
import { useSearchParams } from "next/navigation";

function MobileHeader({ onClose, path }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "individual";
  return (
    <div className="h-screen w-full animate__animated animate__faster  animate__slideInRight  fixed  top-0 right-0 transform z-50  overflow-y-auto   bg-mobilebg">
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
        <ul className="[&>li]:mb-6  animate__animated  animate__slideInDown">
          <li>
            <Link
              onClick={onClose}
              className={` ${path === "/" && "text-[#8C8C8C]"}`}
              href="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={` ${path === "/about" && "text-[#8C8C8C]"}`}
              onClick={onClose}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={` ${path === "/services" && "text-[#8C8C8C]"}`}
              onClick={onClose}
            >
              SERVICES
            </Link>
            <ul className="[&>li]:mb-6  px-8">
              <li className="mt-6">
                <Link
                  href="/services?type=Individual"
                  className={` ${
                    path === "/services" &&
                    type.toLowerCase() === "individual" &&
                    "text-cardbg"
                  }`}
                  onClick={onClose}
                >
                  Individual Therapy
                </Link>
              </li>

              <li>
                <Link
                  href="/services?type=Couples"
                  className={` ${
                    path === "/services" &&
                    type.toLowerCase() === "couples" &&
                    "text-cardbg"
                  }`}
                  onClick={onClose}
                >
                  Couples Therapy
                </Link>
              </li>

              <li>
                <Link
                  href="/services?type=Family"
                  className={` ${
                    path === "/services" &&
                    type.toLowerCase() === "family" &&
                    "text-cardbg"
                  }`}
                  onClick={onClose}
                >
                  Family Therapy
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={onClose}
              className={` ${path === "/contact" && "text-[#8C8C8C]"}`}
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
